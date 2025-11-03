# Case Study Section - Feature Documentation

## Overview
A modern, interactive case study section showcasing portfolio projects with advanced filtering, animations, and responsive design.

## Features Implemented

### 1. **Case Study Data Structure** (`src/data/caseStudiesData.js`)
- 6 sample case studies with complete project information
- Each study includes:
  - Title, category, description
  - Project image (Unsplash placeholders)
  - Technology tags
  - Client name, year, duration
  - Custom accent color

### 2. **Case Study Card Component** (`src/pages/works/components/CaseStudyCard.jsx`)
- **Modern Design Elements:**
  - Image hover zoom effect
  - Gradient overlay on hover
  - Category badge with custom colors
  - Animated "View Project" button
  - Meta information (year, duration)
  - Technology tags with hover effects
  - Color-coded bottom accent line
  
- **Animations:**
  - Scroll-triggered fade-in animations
  - Card lift on hover
  - Image scale effect
  - Smooth transitions

### 3. **Main Works Page** (`src/pages/works/works.jsx`)
- **Category Filter System:**
  - Filter by project category
  - "All" option to show all projects
  - Active state styling
  - Animated filter buttons
  
- **Page Sections:**
  - Hero header with gradient text
  - Filter bar with category buttons
  - Results counter
  - Responsive grid layout (1/2/3 columns)
  - Empty state message
  - Call-to-action section
  
- **Animations:**
  - Staggered card animations
  - Smooth category transitions
  - AnimatePresence for filter changes

### 4. **Home Page Preview** (`src/pages/home/components/CaseStudiesPreview.jsx`)
- Shows 3 featured case studies on homepage
- "View All Projects" button linking to full page
- Consistent styling with main works page
- Animated section header

## Design Features

### Color Scheme
- Primary: `#c9f31d` (Lime green)
- Background: `#1a1a1a` (Dark gray)
- Borders: `#ffffff1a` (Subtle white)
- Text: White, gray shades

### Responsive Breakpoints
- Mobile: 1 column
- Tablet (md): 2 columns
- Desktop (lg): 3 columns

### Animations
- Framer Motion powered
- Scroll-triggered reveals
- Hover effects
- Smooth transitions
- Stagger delays for grid items

## How to Customize

### Adding New Case Studies
Edit `src/data/caseStudiesData.js`:

```javascript
{
    id: 7,
    title: "Your Project Title",
    category: "Your Category",
    description: "Project description...",
    image: "image-url",
    tags: ["Tech1", "Tech2"],
    year: "2024",
    client: "Client Name",
    duration: "X months",
    color: "#hexcolor"
}
```

### Adding New Categories
Update the `categories` array in `caseStudiesData.js`

### Changing Colors
Modify Tailwind classes in components:
- `bg-[#c9f31d]` - Primary color
- `border-[#c9f31d]` - Border color
- Update gradient colors in inline styles

## File Structure
```
src/
├── data/
│   └── caseStudiesData.js          # Project data
├── pages/
│   ├── home/
│   │   ├── Home.jsx                # Updated with preview
│   │   └── components/
│   │       └── CaseStudiesPreview.jsx  # Homepage section
│   └── works/
│       ├── works.jsx               # Main case studies page
│       └── components/
│           └── CaseStudyCard.jsx   # Reusable card component
```

## Technologies Used
- React 19
- Framer Motion 12 (animations)
- React Router DOM (navigation)
- Lucide React (icons)
- Tailwind CSS (styling)

## Performance Considerations
- Lazy loading images (browser native)
- AnimatePresence for smooth transitions
- `viewport={{ once: true }}` to prevent re-animation
- Optimized animation delays

## Accessibility
- Semantic HTML structure
- Alt text on images
- Keyboard navigation support
- Focus states on interactive elements
- ARIA labels where needed

## Future Enhancements
- Individual project detail pages
- Search functionality
- Load more / pagination
- Project filtering by technology
- Like/favorite functionality
- Share buttons
- Related projects section
