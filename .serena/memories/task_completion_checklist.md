# Task Completion Checklist

## Before Committing Changes

### 1. Code Quality Checks
```bash
# Run Biome formatting and linting
npx @biomejs/biome check --apply .

# Run Next.js linting
pnpm lint
```

### 2. Build Verification
```bash
# Ensure the build succeeds
pnpm build

# Test the production build locally (optional)
pnpm start
```

### 3. Type Checking
```bash
# TypeScript compilation check
npx tsc --noEmit
```

### 4. Testing (if applicable)
- Currently no testing framework configured
- Manual testing in development mode recommended
- Check all main sections: About, Works, Products, Contact

### 5. Visual/Functional Verification
- [ ] Check particle animations work correctly
- [ ] Verify scroll behavior and navigation
- [ ] Test responsive design on different screen sizes
- [ ] Ensure all images and icons load properly
- [ ] Verify external links (GitHub, Instagram, X icons)

### 6. Git Workflow
```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: description of changes"

# Push to feature branch
git push origin <branch-name>
```

### 7. Deployment
- Push to main branch triggers automatic Vercel deployment
- GitHub Actions will run CI/CD pipeline
- Monitor deployment status on Vercel dashboard

## After Deployment
- [ ] Verify live site functionality
- [ ] Check both Vercel and Netlify deployments
- [ ] Test performance and loading times
- [ ] Verify analytics tracking (if applicable)