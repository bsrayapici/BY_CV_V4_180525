# Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode support and multilingual content (English/Turkish).

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Dark/Light Mode**: Toggle between dark and light themes with a smooth transition
- **Bilingual Support**: Complete English and Turkish language support
- **Modern UI**: Clean and professional design with animated elements
- **Accessibility**: ARIA labels and semantic HTML for better accessibility
- **Performance Optimized**: Optimized images and lazy loading for better performance

## 🛠 Tech Stack

- **React 19**: Latest version of React for building the user interface
- **Vite**: Next-generation frontend tooling for faster development
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Context API**: For managing theme and language state
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

- **HeroSection**: Landing page with profile image and social links
- **Top**: Navigation bar with theme toggle and language switcher
- **Profile**: Detailed information about professional experience
- **Projects**: Showcase of portfolio projects
- **Skills**: Technical skills and expertise display

## 💡 Context Management

- **ThemeContext**: Manages dark/light mode preferences
- **LanguageContext**: Handles language switching between English and Turkish

## 🎨 Design Features

- Custom color scheme with brand colors (#E92577 for accent)
- Responsive typography with mobile-first approach
- Smooth transitions and hover effects
- Decorative elements for visual interest
- Professional profile image presentation

## 🔧 Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## 📱 Responsive Breakpoints

- Mobile: Default styles
- Tablet: `md:` (768px and up)
- Desktop: `lg:` (1024px and up)

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

## 📄 License

MIT License - feel free to use this project as a template for your own portfolio!