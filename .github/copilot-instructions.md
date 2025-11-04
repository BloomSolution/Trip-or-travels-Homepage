# Trip-or-Travels AI Agent Instructions

This document provides essential context for AI agents working with the Trip-or-Travels codebase.

## Project Overview
Trip-or-Travels is a React-based travel website featuring tour packages, destinations, and booking functionality. The project uses Create React App with Tailwind CSS for styling.

## Core Architecture

### Component Structure
- `/src/components/` - Reusable UI components
- `/src/pages/` - Main page components and route handlers
  - Feature-specific folders (e.g., `Package/`, `Tour/`, `Auth/`) contain related components
  - Each major section (About, Gallery, etc.) has its own folder with dedicated components

### Key Patterns

1. **Page Layout**
   - Each major page section follows a pattern:
   - `[Section]Banner.js` - Hero section component
   - `[Section].js` - Main page component
   - Matching CSS files for styling

2. **Data Organization**
   - Tour and package data is centralized in:
     - `src/pages/Package/packagesData.js`
     - `src/pages/Tour/toursData.js`

3. **Component Conventions**
   - Components are split into presentation and container components
   - Reusable UI elements go in `/src/components/`
   - Page-specific components stay in their respective page folders

## Development Workflow

### Setup & Running
```bash
npm install        # Install dependencies
npm start         # Start development server
npm run build     # Create production build
```

### Key Dependencies
- React Router v7 for routing
- Tailwind CSS for styling
- AOS for scroll animations
- Framer Motion for animations
- React TSParticles for particle effects

## Common Tasks

### Adding a New Page
1. Create a new folder in `/src/pages/`
2. Add components following the Banner/Main/SubComponents pattern
3. Add route in the main App.js router configuration

### Styling Guidelines
- Use Tailwind CSS classes for styling
- Component-specific styles go in `.css` files next to components
- Maintain responsive design patterns used in existing components

### State Management
- Currently using React's built-in state management
- Props drilling is acceptable for shallow component trees
- Consider component composition for complex state sharing

## Testing
- Jest and React Testing Library are configured
- Run tests with `npm test`
- Follow existing test patterns in `App.test.js`

## Common Gotchas
- Remember to maintain responsive designs across all viewports
- Check mobile navigation behavior when adding new routes
- Keep animation performance in mind, especially with TSParticles

## File Organization
Keep related files close:
```
ComponentName/
  ├── ComponentName.js
  ├── ComponentName.css
  └── subcomponents/
```

---

_This guide is auto-generated based on codebase analysis. Please suggest any missing or incorrect information._