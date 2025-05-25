# Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode support and multilingual content (English/Turkish).

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Dark/Light Mode**: Toggle between dark and light themes with smooth transition and persistent state
- **Bilingual Support**: Complete English and Turkish language support with localStorage persistence
- **Modern UI**: Clean and professional design with animated elements and custom decorative shapes
- **Accessibility**: ARIA labels and semantic HTML for better accessibility
- **Performance Optimized**: Optimized images and lazy loading for better performance
- **Testing**: Comprehensive test suite using Vitest and React Testing Library

## 🛠 Tech Stack

- **React 19**: Latest version of React for building the user interface
- **Vite**: Next-generation frontend tooling for faster development
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: For handling navigation and routing
- **Context API**: For managing theme and language state
- **Vitest**: For unit and integration testing
- **ESLint**: For code quality and consistency

## 📁 Project Structure

```
src/
├── assets/         # Images and static assets
├── components/     # React components
│   ├── Top/        # Navigation and language switcher
│   ├── HeroSection/# Main landing section
│   ├── Profile/    # About me section
│   ├── Projects/   # Portfolio projects
│   └── Skills/     # Skills showcase
├── contexts/       # React Context providers
│   ├── ThemeContext    # Dark/light mode management
│   └── LanguageContext # Language switching
├── constants/      # Configuration and static data
└── utils/         # Utility functions
```

## 🚀 Key Components

- **HeroSection**: Landing page with animated profile image and social links
- **Top**: Fixed navigation bar with theme toggle and language switcher
- **Profile**: Professional experience and education in card layout
- **Projects**: Portfolio showcase with laptop mockups
- **Skills**: Technical skills with hover animations

## 💡 State Management

- **ThemeContext**: Manages dark/light mode with localStorage persistence
- **LanguageContext**: Handles language switching between English and Turkish with persistence

## 🎨 Design Features

- Custom color scheme with brand colors
  - Primary: #E92577 (Pink)
  - Dark Background: #0A0A14
  - Accent Colors: #93d0f4, #525252
- Responsive typography with mobile-first approach
- Custom animations and transitions
- Decorative elements for visual interest
- Professional profile image presentation

## 🔧 Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Run tests:
   ```bash
   npm run test
   ```
5. Build for production:
   ```bash
   npm run build
   ```

## 📱 Responsive Breakpoints

- Mobile: Default styles
- Small (sm): 640px and up
- Medium (md): 768px and up
- Large (lg): 1024px and up
- Extra Large (xl): 1280px and up

## 🧪 Testing

- Unit tests for components using Vitest
- Integration tests for context providers
- Snapshot testing for UI consistency
- Mock implementations for external dependencies

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Future Enhancements

- Contact form integration
- Blog section
- Project filtering
- Animated page transitions
- Performance metrics dashboard
- SEO optimization
- Accessibility improvements

## 📄 License

MIT License - feel free to use this project as a template for your own portfolio!