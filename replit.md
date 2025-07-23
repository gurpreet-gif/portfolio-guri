# Personal Portfolio Website

## Overview

This is a modern, full-stack personal portfolio website for Gurpreet Singh, a Full Stack Developer. The application showcases professional experience, skills, projects, and provides a contact form for potential clients or employers. Built with React on the frontend and Express.js on the backend, it features a clean, responsive design using shadcn/ui components and Tailwind CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side navigation
- **UI Library**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for contact form functionality
- **Development**: Hot reloading with Vite integration in development mode

### Data Storage Strategy
- **Database**: PostgreSQL with Drizzle ORM (Active)
- **Database Driver**: Neon Database serverless for cloud deployment
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Storage Implementation**: DatabaseStorage class replacing MemStorage for persistent data

## Key Components

### Portfolio Sections
1. **Hero Section**: Introduction with call-to-action buttons
2. **About Section**: Personal background and statistics
3. **Skills Section**: Technical skills organized by categories
4. **Projects Section**: Featured project showcase with GitHub links
5. **Contact Section**: Contact form and social media links
6. **Footer**: Additional navigation and social links

### UI Components
- Comprehensive shadcn/ui component library
- Responsive navigation with mobile menu
- Form components with validation
- Toast notifications for user feedback
- Loading states and error handling

### Contact System
- Form validation using Zod schemas
- Contact message storage and retrieval
- Admin functionality for message management
- Success/error feedback to users

## Data Flow

### Contact Form Workflow
1. User fills out contact form (name, email, subject, message)
2. Frontend validates input using Zod schema
3. Data sent to `/api/contact` endpoint via POST request
4. Backend validates and stores message
5. Success response triggers toast notification
6. Form resets on successful submission

### Storage Layer
- **IStorage Interface**: Defines storage contract
- **DatabaseStorage Implementation**: PostgreSQL storage with Drizzle ORM
- **Database Schema**: Users and contact messages tables (deployed)
- **Database Integration**: Active PostgreSQL with persistent data storage

## External Dependencies

### Core Dependencies
- **@radix-ui/***: Accessible UI primitives
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database ORM
- **zod**: Runtime type validation
- **tailwindcss**: Utility-first CSS framework
- **vite**: Build tool and development server

### Development Tools
- **TypeScript**: Type safety and developer experience
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Environment
- Vite development server with hot module replacement
- In-memory storage for rapid development
- Environment-specific error handling and logging
- Replit integration for cloud development

### Production Build
- **Frontend**: Static assets built to `dist/public`
- **Backend**: Node.js server bundled with esbuild
- **Database**: PostgreSQL with connection pooling
- **Environment Variables**: Database URL and configuration

### Database Setup
- Drizzle migrations in `./migrations` directory
- Schema definition in `shared/schema.ts`
- Push command: `npm run db:push` for schema updates
- Production database via `DATABASE_URL` environment variable

### Performance Considerations
- Static asset optimization through Vite
- Code splitting and lazy loading ready
- Image optimization for portfolio images
- Responsive design for all device sizes