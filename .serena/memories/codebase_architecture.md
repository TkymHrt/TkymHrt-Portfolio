# Codebase Architecture

## File Organization Pattern

### Component Architecture
```
components/
├── common/           # Reusable components across the site
│   ├── Particle/     # Background particle effects
│   ├── ScrollProgressIndicator/  # Scroll progress UI
│   └── SvgObject/    # SVG rendering component
├── layout/           # Layout-specific components  
│   ├── Footer/       # Site footer
│   ├── Header/       # Site header/navigation
│   └── HeroHeader/   # Main hero section
└── sections/         # Main content sections
    ├── About/        # About section
    ├── Contact/      # Contact information
    ├── Products/     # Product showcase
    └── Works/        # Work experience/projects
```

### App Router Structure (Next.js 13+)
```
app/
├── globals.css       # Global styles and Tailwind imports
├── layout.tsx        # Root layout with metadata and fonts
└── page.tsx         # Main page composing all sections
```

## Design Patterns

### Component Structure
- Each component in its own directory with `index.tsx`
- Barrel exports via `index.ts` files for clean imports
- TypeScript interfaces for all props
- Functional components with hooks

### State Management
- No global state management (Redux/Zustand) used
- Local component state with React hooks
- Props drilling for simple data passing

### Styling Approach
- Utility-first with Tailwind CSS
- CSS variables for theming
- Responsive design with mobile-first approach
- Custom font integration (Noto Sans JP)

### Animation Strategy
- Framer Motion for component animations
- tsparticles for background effects
- react-scroll for smooth navigation

## Key Dependencies and Their Roles
- **Next.js**: Full-stack React framework with App Router
- **TypeScript**: Type safety and better development experience  
- **Tailwind CSS**: Utility-first styling framework
- **Framer Motion**: Declarative animations
- **tsparticles**: Interactive particle background
- **Biome**: Unified linting and formatting tool