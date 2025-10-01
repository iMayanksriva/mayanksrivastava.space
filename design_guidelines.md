# Design Guidelines: Academic Portfolio & Blog for Mayank Kumar Srivastava

## Design Approach: Professional Academic Design System

**Selected Approach:** Hybrid of Linear's minimalist typography + Medium's content-first reading experience + subtle Material Design elevation

**Justification:** Academic portfolios require credibility through clarity while maintaining visual sophistication. The design balances professional authority with modern aesthetics.

**Key Principles:**
- Content hierarchy emphasizes research and publications
- Clean, distraction-free reading experience for blog posts
- Professional credibility through restrained, purposeful design
- Generous whitespace for academic gravitas

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary):**
- Background: 222 15% 8% (deep charcoal)
- Surface: 222 13% 12% (elevated surfaces)
- Primary: 210 100% 65% (professional blue - trust and academia)
- Text Primary: 0 0% 95%
- Text Secondary: 0 0% 70%
- Accent: 160 84% 39% (teal for CTAs and highlights)
- Border: 222 13% 20%

**Light Mode:**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Primary: 210 100% 50%
- Text Primary: 222 15% 15%
- Text Secondary: 222 10% 40%

### B. Typography

**Font Families:**
- Headings: Inter (600, 700) - modern, professional
- Body: Inter (400, 500) - excellent readability
- Code/Technical: JetBrains Mono - for ML code snippets

**Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl font-bold
- Section Titles: text-3xl md:text-4xl font-semibold
- Subsection: text-xl md:text-2xl font-semibold
- Body: text-base md:text-lg leading-relaxed
- Small: text-sm

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Micro spacing: 2, 4 (between elements)
- Component spacing: 6, 8, 12 (within cards)
- Section spacing: 16, 20, 24 (between major sections)

**Container Strategy:**
- Max-width: max-w-7xl for general content
- Blog posts: max-w-3xl for optimal reading
- Code blocks: max-w-4xl

**Grid System:**
- Publications: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Research areas: grid-cols-1 md:grid-cols-2
- Blog listing: Single column with featured cards

### D. Component Library

**Navigation:**
- Fixed header with blur backdrop (backdrop-blur-md bg-background/80)
- Logo/name on left, nav links center/right
- Mobile: Hamburger menu with slide-in drawer
- Active state: underline decoration with primary color

**Hero Section:**
- Full-width with professional headshot (right side on desktop, top on mobile)
- Left: Name, title, tagline, primary CTA
- Height: min-h-[85vh]
- Background: Subtle gradient overlay on dark surface

**Cards:**
- Publication cards: Elevated (shadow-lg), rounded-xl, p-6
- Hover: subtle scale transform (hover:scale-[1.02])
- Border: subtle border on dark mode

**Blog Components:**
- Article cards: Featured image, title, excerpt, date, read time
- Tag system: Rounded pills with muted backgrounds
- Post layout: Hero image, metadata bar, max-w-prose content

**CTAs:**
- Primary: bg-primary text-white px-6 py-3 rounded-lg
- Secondary: variant="outline" with backdrop-blur on images
- Ghost links: Underline on hover

**Research Section:**
- Icon + Title + Description cards
- ML/DL focused iconography
- Grid layout with consistent heights

**Footer:**
- Three columns on desktop: About, Quick Links, Contact
- Social icons: GitHub, LinkedIn, Google Scholar, ResearchGate
- Newsletter signup form
- Copyright and attribution

### E. Animations

**Minimal, Purposeful Only:**
- Fade-in on scroll for section reveals (once)
- Smooth color transitions on interactive elements
- No parallax, no continuous animations
- Page transitions: Simple fade

## Images

**Hero Section:**
- Large hero image: YES
- Professional headshot of Dr. Srivastava (right side, circular or rounded-lg frame)
- Background: Subtle abstract pattern or blurred academic/tech environment
- Size: Desktop 50% width, Mobile full-width above text

**Blog Section:**
- Featured images for each blog post (16:9 aspect ratio)
- Research visualization graphics where applicable
- Placeholder: Academic/AI themed illustrations

**Research/Publications:**
- Small icons for categories (brain, neural network, algorithm symbols)
- Optional: Publication preview thumbnails

**About Section:**
- Secondary photo: Casual professional (teaching, conference, or lab setting)
- Placement: Alongside bio text

## Page Structure

1. **Hero:** Name, credentials, CTA to CV/Contact
2. **About:** Bio, expertise areas, research interests (2-column on desktop)
3. **Research Highlights:** Featured publications (3-column grid)
4. **Teaching:** Courses and academic activities
5. **Blog:** Latest articles (featured + grid)
6. **Publications:** Filterable list with search
7. **Contact:** Form + email + office hours
8. **Footer:** Complete with newsletter

**Mobile-First Responsive:** All grids collapse to single column, navigation drawer, stacked hero components.