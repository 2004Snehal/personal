# Portfolio Website Design Guidelines for Snehal Pal

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern portfolio platforms like Behance and personal branding sites, with emphasis on clean presentation and professional storytelling.

## Core Design Elements

### A. Color Palette
**Primary Colors (Dark Mode Focus)**:
- Primary: 220 15% 12% (Deep charcoal background)
- Secondary: 220 25% 18% (Card backgrounds)
- Accent: 200 95% 65% (Bright cyan for CTAs and highlights)
- Text Primary: 0 0% 95% (Near white)
- Text Secondary: 220 10% 70% (Muted gray)

**Light Mode Variants**:
- Background: 0 0% 98%
- Cards: 0 0% 100%
- Text: 220 15% 15%

### B. Typography
**Font Stack**: Inter from Google Fonts
- Headings: 700 weight, tracking-tight
- Body: 400-500 weight, leading-relaxed
- Tagline: 300 weight, larger scale

### C. Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 24
- Section padding: py-16 lg:py-24
- Container: max-w-6xl mx-auto px-6
- Card spacing: p-6 lg:p-8
- Element gaps: gap-6 to gap-12

### D. Component Library

**Navigation**: Fixed top navigation with smooth scroll links, glassmorphism effect

**Hero Section**: Full-viewport height with professional photo, gradient overlay, and prominent tagline "Entrepreneur | Product | AI"

**Timeline Component**: Vertical timeline with interactive cards showing career progression, including overlapping periods

**Project Cards**: Large cards with embedded YouTube videos, GitHub links, and PDF previews

**Achievement Cards**: Clean metric display with subtle animations on scroll

**Contact Form**: Modern form with floating labels and validation states

### E. Visual Treatments

**Gradients**: 
- Hero overlay: Linear gradient from 220 25% 8% to transparent
- Card accents: Subtle gradients using primary colors
- Button highlights: Cyan to blue gradient for CTAs

**Glass Effects**: Navigation and floating elements use backdrop-blur-sm with border opacity

**Shadows**: Soft, layered shadows for depth without harshness

## Images Section

**Hero Image**: Large professional headshot (provided) with gradient overlay, positioned right side on desktop

**University Photos**: Campus shots for IIT Kharagpur sections, medium-sized cards

**Project Screenshots**: Embedded YouTube video thumbnails and GitHub repository previews

**Timeline Icons**: Company logos for Hodos, Purplle, IIT KGP, and Aalborg University

**Background Elements**: Subtle geometric patterns or mesh gradients in hero and section dividers

## Key Design Principles

1. **Professional Minimalism**: Clean layouts with purposeful whitespace
2. **Content Hierarchy**: Clear visual progression through sections
3. **Interactive Elements**: Smooth scrolling, hover states, and embedded media
4. **Mobile-First**: Responsive design with touch-friendly interactions
5. **Performance Focus**: Optimized images and lazy-loaded content

## Special Features

- Embedded PDF viewer for CV and GC Data Analytics report
- YouTube video integration with custom players
- Google Drive link integration for CV download
- Timeline component with overlapping date handling
- Smooth scroll navigation between sections