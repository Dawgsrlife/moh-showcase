# Ontario Ministry of Health Internship Showcase

A five-minute interactive scroll-story website showcasing my Ontario Ministry of Health internship experience.

## Project Structure

```
src/
├── app/
│   ├── App.tsx                     // Main application component
│   └── Routes.tsx                  // Section routing
├── components/
│   ├── AnimatedBackground.tsx      // Background with particles grid
│   ├── Card.tsx                    // Reusable card component
│   ├── Countdown.tsx               // Five-minute timer
│   ├── Metric.tsx                  // Animated metric counter
│   ├── NavDots.tsx                 // Scroll navigation dots
│   ├── Section.tsx                 // Section wrapper (snap or pin)
│   └── SkipLink.tsx                // Accessibility skip link
├── data/
│   ├── experiences.ts             // Internship experiences
│   ├── metrics.ts                 // Impact metrics
│   └── milestones.ts              // Timeline milestones
├── hooks/
│   ├── useInViewOnce.ts            // Intersection observer (once)
│   ├── useLenis.ts                 // Smooth scrolling
│   ├── usePrefersReducedMotion.ts  // Reduced motion detection
│   └── useScrollScene.ts           // GSAP ScrollTrigger integration
├── lib/
│   ├── gsapCore.ts                 // GSAP lazy loading
│   ├── motion.ts                   // Framer Motion variants
│   ├── numbers.ts                  // Number formatting utilities
│   └── threeCore.ts                // Three.js lazy loading
├── sections/
│   ├── Closing.tsx                 // Closing section
│   ├── DeepDives.tsx              // Deep dive projects
│   ├── Hero.tsx                    // Hero section
│   ├── Impact.tsx                  // Impact metrics
│   ├── Timeline.tsx                // Work timeline
│   └── Tools.tsx                   // Tools and technologies
└── __tests__/
    ├── components/
    │   └── Card.test.ts           // Card component tests
    ├── data/
    │   └── data.test.ts           // Data structure tests
    ├── hooks/
    │   └── usePrefersReducedMotion.test.ts // Hook tests
    └── lib/
        └── numbers.test.ts        // Utility function tests
```

## Technologies Used

- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS v4** for styling
- **Framer Motion** for UI animations
- **GSAP ScrollTrigger** for scroll-driven animations
- **Lenis** for smooth scrolling
- **Three.js** for background particles (optional)

## Features

- Scroll-driven storytelling with pinned and snap sections
- Five-minute countdown timer
- Accessible design with keyboard navigation
- Reduced motion support
- Responsive layout
- Performance optimized with lazy loading
- Data-driven content

## Implementation Details

### SOLID Principles

- **Single Responsibility**: Each component and hook has a single purpose
- **Open/Closed**: Sections can be extended without modifying existing code
- **Liskov Substitution**: All sections implement the same interface
- **Interface Segregation**: Interfaces are kept small and focused
- **Dependency Inversion**: Dependencies are injected rather than hardcoded

### Performance Optimizations

- Lazy loading for GSAP, ScrollTrigger, and Three.js
- Component memoization with React.memo
- RequestAnimationFrame for smooth animations
- Automatic pause when tab is hidden
- File size limits (under 120 lines per file)

### Accessibility

- Keyboard navigation parity with hover effects
- Skip link for keyboard users
- Focus-visible styles
- Reduced motion support
- Semantic HTML structure
- ARIA labels and roles

## File Size Management

All files are kept under 120 lines by:
- Splitting complex components into smaller ones
- Extracting hooks for complex logic
- Creating utility functions for repeated code
- Using barrel exports for related files

## Extension Notes

To add a new section:
1. Create a new component in `src/sections/`
2. Add the section to `src/app/Routes.tsx`
3. Follow the same pattern as existing sections
4. Use the `Section` component with appropriate variant
5. Ensure accessibility and performance standards

## Testing

Simple tests are included for:
- Utility functions (`lib/numbers.ts`)
- Data structure validation
- Component prop validation
- Hook logic validation

Note: These are simplified tests. In a production environment, you would use a full testing framework like Vitest or Jest with React Testing Library.
