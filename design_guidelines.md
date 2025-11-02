# Afri-Rise BPO Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from socially-conscious tech companies like Shopify (professional commerce) and Airbnb (community-focused), combined with healthcare industry credibility standards. The design balances corporate professionalism with approachable warmth to reflect the dual mission of business excellence and community upliftment.

## Typography System

**Font Families** (Google Fonts):
- Primary: Inter (headings, UI elements) - clean, modern, professional
- Secondary: Source Sans Pro (body text) - highly readable, approachable

**Typography Scale**:
- Hero Headings: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headings: text-3xl md:text-4xl lg:text-5xl, font-bold
- Subsection Titles: text-2xl md:text-3xl, font-semibold
- Card Headings: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal
- Small Text/Captions: text-sm, font-normal

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, and 32
- Component padding: p-4, p-8
- Section spacing: py-16 md:py-20 lg:py-32
- Grid gaps: gap-8, gap-12
- Margins: m-4, m-8, mb-12, mb-16

**Container Strategy**:
- Max-width: max-w-7xl for main content containers
- Full-width sections with contained inner content
- Consistent horizontal padding: px-4 md:px-8 lg:px-12

## Page-Specific Layouts

### Home Page
**Hero Section** (100vh):
- Full-screen hero with background image (blurred overlay for text readability)
- Centered content with headline + subheadline + primary CTA
- CTA button with backdrop-blur-md bg-white/20 treatment
- Scroll indicator at bottom

**Services Preview** (6-card grid):
- 3-column layout on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Card design with icon, heading, short description
- Consistent card height with hover elevation

**Who We Are** (2-column split):
- Left: Large image showcasing team/community
- Right: Mission statement + 2 feature highlights with icons

**Projects Showcase** (4-column masonry-style grid):
- Grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Project cards with image, title overlay
- Staggered heights for visual interest

**Pricing Plans** (3-column):
- Equal-width cards with featured plan highlighted (scale-105)
- Clear tier differentiation through sizing and spacing

**Testimonials** (3-card horizontal scroll on mobile, 3-column on desktop):
- Cards with quote, author name, title, company
- Avatar images for social proof

### Services Page
**Services Header**:
- Medium hero (60vh) with relevant image
- Breadcrumb navigation

**Service Details** (alternating 2-column layouts):
- Odd sections: Image left, content right
- Even sections: Content left, image right
- Each service gets dedicated section with icon, description, benefits list

**CTA Section**:
- Centered, full-width with background treatment
- Primary and secondary action buttons

### About Us Page
**Mission Statement**:
- Full-width section with background image
- Centered text overlay with backdrop blur

**Our Impact** (stats section):
- 4-column grid (grid-cols-2 lg:grid-cols-4)
- Large numbers with descriptive text below

**Team Values** (3-column grid):
- Icon + heading + description cards
- Equal height cards

**Community Stories** (timeline/storytelling format):
- Vertical layout with alternating image/text blocks
- Progressive disclosure as user scrolls

### Contact Page
**Contact Hero** (40vh):
- Simple header with contact tagline

**Contact Form + Info** (2-column layout):
- Left (60%): Contact form with name, email, service selection, message
- Right (40%): Contact details, office hours, map placeholder, social links

**Location Details**:
- Address with map integration area
- Office hours, phone, email prominently displayed

## Component Library

**Navigation**:
- Fixed/sticky header with logo left, menu items right
- Mobile: Hamburger menu with slide-in drawer
- Height: h-20, shadow on scroll

**Buttons**:
- Primary: px-8 py-4, rounded-lg, font-semibold
- Secondary: px-8 py-4, rounded-lg, border-2
- Over images: backdrop-blur-md with semi-transparent background

**Cards**:
- Standard padding: p-6 md:p-8
- Rounded corners: rounded-xl
- Shadow: shadow-lg on hover
- Border treatment: border or shadow-md for definition

**Form Elements**:
- Input fields: px-4 py-3, rounded-lg, border-2
- Consistent focus states across all inputs
- Label above input with mb-2

**FAQ Accordion**:
- Border-separated items
- Smooth expand/collapse animation
- Chevron icon rotation indicator

**Footer**:
- 4-column layout on desktop (Company info, Services, Quick Links, Contact)
- Mobile: stacked single column
- Padding: py-16, border-top

## Images Strategy

**Hero Images** (Unsplash):
- Home: Professional office environment with diverse team collaboration
- Services: Modern call center or technology workspace
- About: Community gathering or training session
- Contact: Cape Town cityscape or office exterior

**Section Images**:
- Services icons: Use Heroicons for consistency
- Project images: Real BPO work environments, training sessions, team celebrations
- Testimonial avatars: Professional headshots or placeholders
- About page: Community impact photos, training workshops, team activities

**Image Treatments**:
- Hero backgrounds: Subtle overlay (bg-black/40) for text contrast
- Card images: object-cover with fixed aspect ratios (aspect-video or aspect-square)
- Rounded corners on feature images: rounded-lg or rounded-xl
- All images must be high-resolution from Unsplash API

## Interaction Patterns

**Page Transitions**:
- Smooth scrolling behavior
- Fade-in animations on scroll for sections (stagger effect)

**Micro-interactions**:
- Button hover: subtle scale (scale-105) with shadow increase
- Card hover: elevation increase (shadow-xl)
- Link hover: underline decoration
- Form focus: border highlight with subtle glow

**Loading States**:
- Skeleton screens for image loading
- Smooth transitions when content loads

## Accessibility Requirements

- Minimum touch target: 44x44px for all interactive elements
- Form labels always visible
- Clear focus indicators with 2px outline
- Semantic HTML structure with proper heading hierarchy
- Alt text for all images
- Keyboard navigation support throughout

## Responsive Breakpoints

- Mobile: < 768px (single column layouts)
- Tablet: 768px - 1024px (2-column layouts)
- Desktop: > 1024px (3-4 column layouts)

**Mobile Optimizations**:
- Stack all multi-column layouts
- Full-width CTAs
- Hamburger navigation
- Touch-friendly spacing (min gap-8)

This design system creates a professional, credible BPO website while maintaining warmth and approachability that reflects Afri-Rise BPO's social mission. The multi-column layouts and rich imagery establish trust, while the generous spacing and clear typography ensure excellent usability across all devices.