# Code Style and Conventions

## Linting and Formatting
- **Tool**: Biome (Biomejs) v1.8.3
- **Indentation**: Tabs with 2-space width
- **Line Width**: 120 characters
- **Import Organization**: Enabled automatically
- **Rules**: Recommended rules enabled

## TypeScript Configuration
- **Strict Mode**: Enabled
- **JSX**: Preserve mode (Next.js handles transformation)
- **Module Resolution**: Bundler
- **Imports**: Path mapping configured for clean imports

## File Naming Conventions
- Components: PascalCase directories with `index.tsx`
- Utilities: camelCase files
- Configuration: kebab-case or standard names (e.g., `next.config.mjs`)

## Component Structure
- Each component in its own directory with `index.tsx`
- Barrel exports in `index.ts` files for clean imports
- TypeScript interfaces for props
- Functional components with TypeScript

## Styling Conventions
- **Tailwind CSS**: Utility-first approach
- **Custom Colors**: CSS variables (--background, --foreground)
- **Font**: Noto Sans JP as primary font family
- **Responsive**: Mobile-first design approach

## Import Organization
- External libraries first
- Internal components grouped by type
- Relative imports last
- Barrel exports preferred for cleaner imports