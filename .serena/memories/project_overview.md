# TkymHrt Portfolio - Project Overview

## Purpose
TkymHrt-Portfolio is a personal portfolio website for TkymHrt, built to showcase projects, skills, and work experience. The site is designed as a modern, responsive web application with smooth animations and particle effects.

## Tech Stack
- **Framework**: Next.js 14.2.8 (React-based)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 11.5.4
- **Particles**: @tsparticles/slim 3.5.0
- **Scroll**: react-scroll 1.9.0
- **Analytics**: Vercel Analytics 1.3.2
- **Package Manager**: Multiple (supports bun, pnpm, npm)

## Deployment
- Primary: Vercel (https://tkymhrt-portfolio.vercel.app/)
- Secondary: Netlify (https://tkymhrt-portfolio.netlify.app/)
- Cloudflare Pages support via @cloudflare/next-on-pages

## Project Structure
- `app/`: Next.js App Router structure with layout and pages
- `components/`: Organized in three main categories:
  - `common/`: Reusable components (Particle effects, SVG objects, Scroll indicators)
  - `layout/`: Layout components (Header, Footer, HeroHeader)
  - `sections/`: Main content sections (About, Works, Products, Contact)
- `public/`: Static assets (icons, images, favicon)

## Key Features
- Particle animation background
- Smooth scroll navigation
- Responsive design
- Multiple deployment targets
- Continuous integration with GitHub Actions