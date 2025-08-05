# Overview

This is a React-based quiz application designed to help users identify potential sleep and recovery issues through a personalized questionnaire. The application presents users with questions about their morning feelings and sleep patterns, then provides customized results based on their responses. The quiz follows a branching logic where subsequent questions depend on the user's initial answer, creating a personalized assessment experience.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for smooth transitions and interactions
- **State Management**: React hooks for local state, TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database Integration**: Drizzle ORM configured for PostgreSQL
- **Data Storage**: In-memory storage with interface for database operations
- **API Design**: RESTful API with /api prefix for all endpoints

## Data Storage
- **Database**: PostgreSQL configured through Neon Database serverless connection
- **ORM**: Drizzle ORM with type-safe queries and migrations
- **Schema**: User management and quiz response tracking with JSON storage for flexible answer data
- **Migrations**: Drizzle Kit for database schema management

## Quiz Logic Architecture
- **Branching Logic**: First question determines the path for subsequent questions
- **Dynamic Results**: Result content varies based on the user's answer path
- **Session Tracking**: Quiz responses are stored with session IDs for analytics
- **Progress Tracking**: Visual progress indicator showing completion percentage

## Authentication & Authorization
- **Current State**: Basic user schema defined but not implemented
- **Planned**: Session-based authentication with PostgreSQL session store
- **Security**: Password hashing and session management ready for implementation

# External Dependencies

## Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM and query builder
- **express**: Web application framework for the backend API
- **react**: Frontend user interface library
- **@tanstack/react-query**: Server state management and caching

## UI & Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **framer-motion**: Animation library for React components
- **lucide-react**: Icon library with consistent design

## Development Tools
- **vite**: Fast build tool and development server
- **typescript**: Static type checking for JavaScript
- **drizzle-kit**: Database migration and schema management
- **@replit/vite-plugin-***: Replit-specific development plugins

## Form & Validation
- **react-hook-form**: Performant forms with easy validation
- **@hookform/resolvers**: Resolver library for form validation
- **zod**: TypeScript-first schema validation
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

## Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **clsx**: Utility for constructing className strings conditionally
- **class-variance-authority**: Utility for creating variant-based component APIs