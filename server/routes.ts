import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
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

  const httpServer = createServer(app);
  return httpServer;
}
