# TUPS Pro Website - Development Guide

## Project Overview
Building a conversion-optimized website for TUPS Pro, a rhythm training app for musicians.

## CRITICAL REQUIREMENTS
- **DO NOT MODIFY**: privacy-policy.html, terms-of-service.html, support.html
- These existing pages must remain unchanged and be linked from the new site

## Tech Stack
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- Framer Motion (subtle animations only)

## Phase 1 Goals (Current)
- Single-page conversion funnel
- Mobile-first responsive design
- Launch-ready with placeholder content
- Email capture for launch list

## Project Structure
```
/app
  /page.tsx                 # Main conversion page
  /how-it-works/page.tsx   # Demo/tutorial page (Phase 1)
  /pricing/page.tsx        # Standalone pricing (optional)
  /exercises/              # Phase 2 - SEO pages (NOT NOW)
  /api/
    /newsletter/route.ts   # Email capture

/components
  /sections/
    Hero.tsx              # Hero with video
    ExerciseShowcase.tsx  # Tabbed exercise display
    PricingTable.tsx      # Pricing component
    TrustBadges.tsx       # MIDI precision badges
    FAQ.tsx               # Frequently asked questions
  /ui/
    VideoPlayer.tsx       # Responsive video component
    CTAButton.tsx         # Consistent CTA styling
    ExerciseTab.tsx       # Reusable tab component

/lib
  /constants.ts           # Pricing, features, exercises
  /analytics.ts           # GA4/Mixpanel setup

/public
  /videos/               # Demo videos (placeholders for now)
  /images/               # Screenshots, icons
```

## Page Sections (In Order)

### 1. Hero Section
- Headline: "Master Rhythm in 15 Minutes Daily"
- Subheadline: "4 Progressive Exercises. One Goal: Unshakeable Time."
- Two CTAs: "Watch Demo" + "Start Free Trial"
- Background: Subtle animated metronome or pulse visualization

### 2. Exercise Showcase
- Tabbed interface: TUPS | A&R+ | PATTERN | TUP LAB
- Each tab shows:
  * Exercise name with icon
  * 3 key benefits (bullets)
  * 10-second autoplay video (muted) - placeholder for now
  * "Learn More" link (Phase 2 - not implemented yet)
- Mobile: Convert to accordion

### 3. How It Works
- 3 steps with icons
- Download → Practice → Master
- Simple, visual

### 4. Trust/Credibility
- "Built on Professional MIDI Engine"
- "<5ms latency" badge
- "No credit card required" badge
- "Cancel anytime" badge

### 5. Pricing Section
- Single pricing table
- 3 tiers: Monthly ($3.99) | 6-Month ($15.99) | Annual ($19.99)
- Highlight annual (BEST VALUE)
- Single CTA per tier

### 6. Final CTA Section
- "Ready to Transform Your Rhythm?"
- Email capture for launch notification
- App Store / Google Play buttons (placeholders)

### 7. Footer
- Minimal: Privacy, Terms, Contact, Support
- Social links (Instagram, YouTube)
- **MUST LINK TO EXISTING**: privacy-policy.html, terms-of-service.html, support.html

## Design Tokens

### Colors
- Primary: #2563EB (Blue - trust, precision)
- Accent: #F59E0B (Amber - energy, music)
- Success: #10B981 (Green - growth)
- Background: #FAFAFA (Light) / #0F172A (Dark mode)
- Text: #1E293B (Light) / #F8FAFC (Dark mode)

### Typography
- Headings: Inter or Montserrat
- Body: System UI (fast loading)
- Hero: 48px mobile / 72px desktop
- Section: 32px mobile / 48px desktop
- Body: 16px mobile / 18px desktop

### Spacing
- Section padding: 80px vertical
- Container: max-w-6xl with padding
- Component spacing: 8px grid system

### Components
- CTA Buttons: Rounded, drop shadow, hover scale
- Cards: Subtle border, hover elevation
- Tabs: Underline active, smooth transition

## Exercise Content

### TUPS
- Tagline: "Develop Unshakeable Internal Pulse"
- Benefits:
  1. Master 2-12 tuplets systematically
  2. Mute individual notes for focused practice
  3. Build true pulse, not mechanical counting

### A&R+ (Accent & Rest Plus)
- Tagline: "Master Complex Rhythmic Patterns"
- Benefits:
  1. Practice accents and rests in any combination
  2. Develop dynamic control
  3. Perfect for sight-reading preparation

### PATTERN
- Tagline: "Create and Master Custom Rhythms"
- Benefits:
  1. Design your own rhythmic patterns
  2. Loop difficult passages
  3. Progressive tempo training

### TUP LAB
- Tagline: "Advanced Polyrhythm Training"
- Benefits:
  1. Master polyrhythms and cross-rhythms
  2. Develop independence between limbs
  3. Professional-level rhythm skills

## Pricing Tiers
1. **Monthly**: $3.99/month
2. **6-Month**: $15.99 (Save 33%)
3. **Annual**: $19.99 (Save 58%) - BEST VALUE

## Performance Requirements
- Lighthouse score >90
- Mobile-first responsive
- Lazy load videos below fold
- Optimize images with next/image

## Responsive Breakpoints
- Mobile: <768px
- Tablet: 768px - 1024px
- Desktop: >1024px

## Important Notes
1. Use placeholder videos initially (solid color with text)
2. Include "Coming January 2025" if not live
3. Make CTAs prominent but not aggressive
4. Desktop-first development is OK (musicians use tablets/laptops)
5. Keep animations subtle with Framer Motion

## DO NOT
- Add complex animations
- Include testimonials yet (no users)
- Build admin panel (Phase 3)
- Add blog/resources (Phase 2)
- Implement payment (app stores handle it)
- MODIFY existing HTML files (privacy, terms, support)

## Testing Priorities
- iPhone Safari (critical)
- iPad landscape (common for musicians)
- Chrome desktop

## Next Steps
1. Create Next.js structure
2. Build components with placeholder content
3. Implement responsive design
4. Add email capture
5. Test cross-browser
6. Deploy to Vercel