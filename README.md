# EstatePro - Premium Real Estate Website

A modern, fully responsive single-page real estate website built with React.js, Tailwind CSS, and Framer Motion animations.

## Features

✨ **Modern Glass Morphism UI** - Sleek glassmorphism effects throughout
🎨 **Gradient Backgrounds** - Beautiful gradient color schemes
🌙 **Dark/Light Mode** - Toggle between dark and light themes
📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
⚡ **Smooth Animations** - Framer Motion animations and hover effects
🎯 **Interactive Elements** - Engaging buttons, cards, and modals
📊 **Statistics Section** - Animated counters showcasing metrics
🏢 **Property Listings** - 4 featured properties with detailed cards
👥 **Consultant Grid** - 4 expert consultants with contact options
🏗️ **Property Management** - Professional management services showcase
💼 **Services** - 4 comprehensive service cards
📧 **Contact Modal** - Interactive contact form with validation
🔗 **Navigation** - Smooth scroll navigation with mobile menu

## Tech Stack

- **React.js 18** - UI library
- **Tailwind CSS 3** - Styling and responsive design
- **Framer Motion 10** - Advanced animations
- **React Icons** - Icon library
- **React Scripts 5** - Build tools

## Project Structure

```
src/
├── components/
│   ├── Header.jsx           # Navigation header with dark mode toggle
│   ├── Hero.jsx             # Hero section with search bar
│   ├── Properties.jsx       # Featured properties grid
│   ├── Consultants.jsx      # Expert consultants showcase
│   ├── PropertyManagement.jsx # Management services section
│   ├── Services.jsx         # Service offerings
│   ├── Statistics.jsx       # Animated statistics section
│   ├── Company.jsx          # Parent company information
│   ├── ContactModal.jsx     # Contact form modal
│   └── Footer.jsx           # Footer with links and newsletter
├── App.jsx                  # Main app component
└── index.css                # Global styles and utilities
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Build for production:
```bash
npm run build
```

## Key Features

### 1. **Header & Navigation**
- Fixed navigation with gradient logo
- Dark/light mode toggle
- Mobile-responsive hamburger menu
- Smooth scroll links to sections

### 2. **Hero Section**
- Eye-catching headline with gradient text
- Search bar with icon
- Call-to-action buttons
- Animated background gradients

### 3. **Properties Section**
- 4 featured property cards
- Glass morphism design
- Property details (price, location, beds, baths)
- Heart icon for favorites
- Featured badges

### 4. **Consultants Section**
- 4 expert consultant cards
- Social media links on hover
- Specialty tags
- Contact buttons

### 5. **Property Management**
- Two-column layout
- Service features list
- Professional management stats
- Call-to-action button

### 6. **Services Section**
- 4 service cards with gradients
- Icon animations
- Feature lists
- Styled CTA buttons

### 7. **Statistics Section**
- Animated counters
- Visual stats cards
- Inview animations

### 8. **Company Section**
- Mahime Architects parent company info
- Company highlights
- Professional features

### 9. **Contact Modal**
- Modern modal design
- Contact information display
- Form with validation
- Success message animation
- Business hours
- Contact details (phone, email, address)

### 10. **Footer**
- Newsletter subscription
- Quick links
- Company links
- Contact information
- Social media links
- Back-to-top button

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```js
colors: {
  glass: {
    light: 'rgba(255, 255, 255, 0.7)',
    dark: 'rgba(15, 23, 42, 0.8)',
  },
}
```

### Data
All property, consultant, and service data is hardcoded in their respective components. Modify the data arrays to update content.

### Animations
Adjust Framer Motion animation settings in individual components:
```jsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized animations with Framer Motion
- CSS-based transitions for better performance
- Responsive image and asset handling
- Lazy loading of components with Framer Motion's viewport detection

## Dark Mode

The site automatically detects system preference and respects dark mode settings. Users can toggle manually with the sun/moon icon in the header.

## Responsive Design

- Mobile-first approach
- Tailwind breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Flexible grid layouts
- Responsive typography
- Touch-friendly interactive elements

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, please contact: info@estatepro.com

---

Built with ❤️ by EstatePro | A division of Mahime Architects
