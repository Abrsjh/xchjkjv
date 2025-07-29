# 🏥 St. Mary's Medical Center

> A modern, responsive hospital portfolio website built with React, TypeScript, and Tailwind CSS

## ✨ Features

- **Modern Design**: Clean, professional medical-themed interface
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Components**: Animated cards, modals, and smooth transitions
- **Accessibility First**: WCAG 2.1 AA compliant with proper contrast ratios
- **Performance Optimized**: Fast loading with optimized images and minimal bundle size
- **TypeScript**: Fully typed for better development experience
- **Smooth Animations**: Framer Motion powered animations and transitions

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hospital-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Lint code
npm run lint

# Format code
npm run format
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base design system components
│   ├── sections/       # Page section components
│   └── layout/         # Layout wrapper components
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── styles/             # Global styles and Tailwind config
```

## 🎨 Design System

### Colors
- **Primary**: Medical blue (#0ea5e9) to Professional blue (#2563eb)
- **Medical**: Healthcare cyan (#0ea5e9) to Deep medical blue (#0c4a6e)
- **Success**: Medical green (#22c55e) for positive indicators
- **Neutral**: Slate grays for text and backgrounds

### Typography
- **Headings**: Poppins (display font)
- **Body**: Inter (reading font)
- **Weights**: 300, 400, 500, 600, 700

### Components
- Glass morphism effects for modern aesthetics
- Gradient buttons and backgrounds
- Soft shadows and rounded corners
- Hover animations and micro-interactions

## 📱 Sections

1. **Hero**: Stunning landing section with animated elements
2. **About**: Hospital story, values, and timeline
3. **Services**: Interactive service cards with hover effects
4. **Doctors**: Team profiles with detailed modals
5. **Testimonials**: Patient stories with carousel
6. **Contact**: Interactive appointment booking form

## ⚡ Performance Features

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Lazy loading and responsive images
- **Bundle Analysis**: Optimized dependencies
- **Caching Strategy**: Efficient browser caching
- **SEO Optimized**: Meta tags and semantic HTML

## 🔧 Customization

### Theme Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your primary colors */ },
      medical: { /* your medical theme colors */ }
    }
  }
}
```

### Content Updates
- Update hospital information in component files
- Modify services, doctors, and testimonials data
- Customize contact information and hours

### Styling
- Global styles: `src/index.css`
- Component styles: Tailwind classes
- Custom animations: Framer Motion configurations

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For support and questions:
- Email: support@stmarysmedical.com
- Phone: (555) 123-4567

---

<div align="center">
  <p>Built with ❤️ for better healthcare experiences</p>
  <p>© 2024 St. Mary's Medical Center. All rights reserved.</p>
</div>