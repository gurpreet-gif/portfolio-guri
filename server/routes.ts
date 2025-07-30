import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertReviewSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle favicon requests to prevent 500 errors
  app.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // No Content
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      res.json({ 
        success: true, 
        message: "Message sent successfully! I'll get back to you soon.",
        id: message.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please fill in all required fields correctly.",
          errors: error.errors
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again later."
        });
      }
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact/messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({ success: true, messages });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve messages."
      });
    }
  });

  // Mark message as read
  app.patch("/api/contact/messages/:id/read", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid message ID."
        });
      }
      
      await storage.markMessageAsRead(id);
      res.json({ success: true, message: "Message marked as read." });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to update message status."
      });
    }
  });

  // Reviews endpoints
  app.get("/api/reviews", async (req, res) => {
    try {
      const reviews = await storage.getAllReviews();
      res.json(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch reviews." 
      });
    }
  });

  app.post("/api/reviews", async (req, res) => {
    try {
      const validatedData = insertReviewSchema.parse(req.body);
      const review = await storage.createReview(validatedData);
      res.json({ 
        success: true, 
        message: "Review submitted successfully!",
        id: review.id
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please fill in all required fields correctly.",
          errors: error.errors
        });
      } else {
        console.error("Error creating review:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit review. Please try again later." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
