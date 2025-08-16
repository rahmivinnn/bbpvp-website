# BBPVP Bandung Company Profile Website

## Overview

This is a modern, interactive company profile website for BBPVP (Balai Besar Pelatihan Vokasi dan Produktivitas) Bandung, built as a full-stack application. The project features a React frontend with TypeScript, a Node.js/Express backend, and is designed to showcase the institution's vocational training programs, facilities, and achievements. The website includes comprehensive animations, dark/light mode support, and a responsive design optimized for modern web standards.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom CSS variables for theming, supporting both light and dark modes
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Animation Libraries**: GSAP with ScrollTrigger for advanced animations, Lottie for micro-animations

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript throughout the entire stack for consistency
- **Database Integration**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Session Management**: Connect-pg-simple for PostgreSQL-backed session storage
- **Development Setup**: Hot module replacement and development middleware through Vite integration

### Component Structure
- **Modular Design**: Organized component hierarchy with reusable UI components
- **Section-based Layout**: Hero, About, Programs, Gallery, Contact, and Footer sections
- **Modal System**: Dedicated modal components for program details and image lightbox functionality
- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu and smooth scrolling

### Styling System
- **Design Tokens**: CSS custom properties for consistent theming across light/dark modes
- **Component Variants**: Class variance authority for systematic component styling
- **Typography**: Custom font loading with Inter and Poppins font families
- **Color Scheme**: BBPVP brand colors integrated into the design system
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Animation Framework
- **Scroll Animations**: GSAP ScrollTrigger for scroll-based reveals and parallax effects
- **Page Transitions**: Smooth transitions between sections and modal states
- **Micro-interactions**: Hover effects, button animations, and loading states
- **Progress Indicators**: Scroll progress bar and back-to-top functionality

### Data Management
- **Content Structure**: Structured data for programs, gallery items, and contact information
- **Type Safety**: Full TypeScript integration with Zod schema validation
- **Caching Strategy**: React Query for optimized data fetching and cache management

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver for database connectivity
- **drizzle-orm**: Modern TypeScript ORM for database operations and migrations
- **drizzle-zod**: Integration between Drizzle ORM and Zod for type-safe schema validation

### UI and Styling
- **@radix-ui/***: Comprehensive suite of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **tailwindcss**: Utility-first CSS framework for rapid styling
- **class-variance-authority**: Type-safe component variants and styling
- **clsx**: Utility for conditionally joining CSS classes

### Animation and Interaction
- **@lottiefiles/react-lottie-player**: Lottie animation player for micro-interactions
- **GSAP**: Professional-grade animation library loaded via CDN for performance
- **Font Awesome**: Icon library loaded via CDN for comprehensive iconography

### Development and Build Tools
- **@tanstack/react-query**: Powerful data synchronization for server state
- **wouter**: Minimalist routing library for React applications
- **date-fns**: Modern date utility library for date formatting and manipulation
- **react-hook-form**: Performant forms with easy validation and @hookform/resolvers for schema integration

### Database and Session Management
- **connect-pg-simple**: PostgreSQL session store for Express applications
- **@shared/schema**: Custom schema definitions shared between client and server

### Development Environment
- **@replit/vite-plugin-***: Replit-specific plugins for development environment integration
- **tsx**: TypeScript execution environment for development server
- **esbuild**: Fast JavaScript bundler for production builds