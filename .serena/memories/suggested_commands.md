# Suggested Commands

## Development Commands
```bash
# Start development server
pnpm dev
# or
bun dev
# or  
npm run dev

# Build for production
pnpm build
# or
bun run build
# or
npm run build

# Start production server
pnpm start
# or
bun start
# or
npm run start
```

## Code Quality Commands
```bash
# Run linting
pnpm lint
# or
bun run lint
# or
npm run lint

# Format code with Biome
npx @biomejs/biome format --write .

# Lint and fix with Biome  
npx @biomejs/biome lint --apply .

# Check all (format + lint)
npx @biomejs/biome check --apply .
```

## Dependency Management
```bash
# Install dependencies (preferred: pnpm)
pnpm install

# Add new dependency
pnpm add <package-name>

# Add dev dependency
pnpm add -D <package-name>

# Update dependencies
pnpm update
```

## Git Commands (Linux)
```bash
# Common git operations
git status
git add .
git commit -m "message"
git push origin <branch-name>
git pull origin main

# Branch management
git checkout -b feature/new-feature
git merge main
```

## System Commands (Linux)
```bash
# File operations
ls -la          # List files with details
find . -name "*.tsx" -type f    # Find TypeScript React files
grep -r "component" ./components/   # Search in components
cd <directory>  # Change directory
```

## Deployment
- **Vercel**: Automatic deployment on push to main
- **Netlify**: Automatic deployment configured
- **GitHub Actions**: CI/CD pipeline runs on push/PR