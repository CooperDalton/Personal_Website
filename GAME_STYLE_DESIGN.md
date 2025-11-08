# Game Style Page Design - Complete Specification

## Overview
A retro video game-inspired landing page with a dark theme, pixelated aesthetics, and scrollable content sections. The design features cyan/teal color scheme with glowing effects, animated buttons, and a game UI feel.

## Design Elements

### Color Scheme
- **Primary**: Cyan/Teal (#00ffff, rgba(0, 255, 255))
- **Background**: Very dark (#0a0a0a)
- **Text**: Light gray (#e6e6e6) with cyan accents
- **Panels**: Black with cyan borders and subtle glow

### Typography
- **Headers**: Pixel font (Press Start 2P) - uppercase, wide tracking
- **Body**: Monospace font for readability
- **Sizes**: Responsive (text-2xl to text-5xl for headers, text-xs to text-base for body)

### Visual Effects
- **Pixelated rendering**: All elements use crisp pixel rendering
- **Glowing effects**: Cyan glow on titles, buttons, and panels
- **Scanlines**: Subtle animated scanline overlay
- **Grid background**: Subtle cyan grid lines
- **Corner accents**: Radial glows in corners for depth

## Page Structure (Scrollable)

### 1. Hero Section (Top of page)
- **Title**: "WIZDRO // indie dev + hacker" with animated glow
- **Navigation buttons**: [BLOG] [PROJECTS] [BOOKS] [HABITS] [ABOUT]
- **Button behavior**: Pop and squiggle animation on hover (one-time bounce)
- **Layout**: Centered, full viewport height

### 2. Habit Tracker Section
- **Section title**: "HABIT TRACKER" with cyan glow
- **Content**: 
  - Visual grid showing weekly habits
  - Each habit has 7 boxes (one per day of week)
  - Completed days show checkmark (✓) with cyan glow
  - Incomplete days are dark gray
  - Day labels below (Mon, Tue, Wed, etc.)
- **Sample habits**: Code, Exercise, Read, Meditate
- **Styling**: Black panel with cyan border, subtle inner glow

### 3. About Me Section
- **Section title**: "ABOUT ME" with cyan glow
- **Content**: 
  - Brief paragraph about being an indie developer and hacker
  - Mentions passion for creative projects and technology
  - Notes current work on side projects and open source
- **Styling**: Black panel with cyan border, readable monospace text

### 4. Latest Blog Post Section
- **Section title**: "LATEST BLOG POST" with cyan glow
- **Content card**:
  - Title (cyan, pixel font)
  - Excerpt/preview text
  - Date and read time
  - Hover effect (opacity change)
- **Styling**: Black panel with cyan border, clickable card

### 5. Projects Section
- **Section title**: "PROJECTS" with cyan glow
- **Content**: Grid of project cards (2 columns on desktop, 1 on mobile)
- **Each project card**:
  - Title (cyan, pixel font)
  - Description (gray, monospace)
  - Tech stack tags (cyan badges with borders)
  - Hover effect (border brightens, panel glows)
- **Sample projects**: Pixel Art Generator, Terminal Portfolio, Game Engine, CLI Tool Suite

### 6. Books Section
- **Section title**: "BOOKS" with cyan glow
- **Content**: Grid of book entries (2 columns on desktop, 1 on mobile)
- **Each book entry**:
  - Title (cyan, pixel font)
  - Author (gray, monospace)
  - Status badge: [reading] (yellow), [completed] (green), [planned] (gray)
  - Left border accent (cyan)
- **Sample books**: Clean Code, The Pragmatic Programmer, Design Patterns, You Don't Know JS

## Interactive Elements

### Buttons
- **Style**: Black background, cyan border (2px), cyan text
- **Hover animation**: 
  - Quick pop and squiggle (0.25s)
  - Moves up 4-6px
  - Slight rotation (±1deg)
  - Scale up to 1.08-1.1x
  - Enhanced glow effect
  - Plays once per hover (resets on mouse leave)

### Panels
- **Base**: Black background with 80% opacity
- **Border**: Cyan, 2px, 50% opacity
- **Glow**: Subtle cyan shadow and inner glow
- **Hover**: Border brightens, glow intensifies

### Navigation
- Smooth scroll to sections when clicking nav buttons
- Sections have IDs: #habits, #about, #blog, #projects, #books

## Animations

### Title Glow
- Continuous pulsing glow effect
- 3 second cycle
- Glow intensity varies from 0.5 to 0.7 opacity

### Button Pop
- Triggered on hover
- 0.25s duration
- Multiple keyframes for squiggle effect
- Final state: elevated position with glow

### Panel Hover
- Border opacity increases
- Glow intensifies
- Smooth 0.3s transition

## Technical Implementation

### Components Created
1. **GameLanding.tsx**: Main scrollable page component
2. **GameBackground.tsx**: Background effects (grid, scanlines, glows)
3. **PageSwitcher.tsx**: Updated to include "Game" option
4. **page.tsx**: Updated to handle game style routing

### CSS Classes
- `.game-title`: Animated glowing title
- `.game-section-title`: Section headers with glow
- `.game-panel`: Panel styling with hover effects
- `.game-button-hover`: Button animation class
- `.pixelated`: Pixel rendering for crisp edges

### Key Features
- Fully responsive (mobile and desktop)
- Smooth scrolling between sections
- Pixel-perfect rendering
- Performance optimized animations
- Accessible color contrasts
- Semantic HTML structure

## Customization Points

### Easy to Modify
- **Colors**: Change cyan (#00ffff) to any color
- **Square sizes**: Adjust grid square size
- **Content**: All text content is easily editable
- **Habits**: Add/remove habits, change tracking data
- **Projects**: Add/remove project cards
- **Books**: Add/remove book entries
- **Animations**: Adjust timing and intensity in CSS

### Data Structure
- Habits: Array of objects with name and days array
- Projects: Array with title, description, tech array
- Books: Array with title, author, status
- Blog: Single object with title, excerpt, date, readTime

## Future Enhancements (Optional)
- Add smooth scroll behavior
- Implement actual blog post fetching
- Connect habit tracker to real data source
- Add project detail modals
- Implement book reading progress bars
- Add sound effects on button hover (optional)
- Add particle effects in background
- Implement dark/light mode toggle
- Add keyboard navigation support

