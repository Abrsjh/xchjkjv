# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Modern hospital portfolio website built with React, TypeScript, and Tailwind CSS. Features responsive design, smooth animations, and interactive healthcare-focused components.

## Architecture
- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom medical theme
- **Build Tool**: Vite for fast development and optimized builds
- **State Management**: React hooks and context for component state
- **Icons**: Lucide React for consistent medical/healthcare iconography
- **Animations**: Framer Motion for smooth transitions and interactions

## Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format
```

## Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base design system components
│   ├── sections/       # Page section components
│   └── layout/         # Layout wrapper components
├── pages/              # Main page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── assets/             # Static assets (images, icons)
└── styles/             # Global styles and Tailwind config
```

## Key Design Principles
- **Medical Theme**: Professional healthcare color palette (blues, whites, subtle greens)
- **Accessibility**: WCAG 2.1 AA compliant with proper contrast ratios
- **Mobile-First**: Responsive design optimized for all device sizes
- **Performance**: Optimized images, lazy loading, and minimal bundle size
- **Animations**: Subtle, professional animations that enhance UX without being distracting

## Component Guidelines
- Use TypeScript interfaces for all props
- Implement proper error boundaries for robust UX
- Follow naming convention: PascalCase for components, camelCase for functions
- Use semantic HTML elements for accessibility
- Implement proper loading states and error handling

## Styling Approach
- Utility-first approach with Tailwind CSS
- Custom CSS variables for consistent theming
- Component-scoped styles when needed
- Responsive breakpoints: mobile (default), tablet (768px+), desktop (1024px+)

## Content Strategy
Focus on showcasing:
- Hospital facilities and modern equipment
- Medical staff and expertise
- Patient care philosophy
- Services and specializations
- Contact information and accessibility
- Trust indicators (certifications, awards, testimonials)