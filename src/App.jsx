// Import necessary dependencies from React and React Router
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all components used in the application
import Top from './components/Top';                 // Navigation and theme/language controls
import HeroSection from './components/HeroSection'; // Main landing section
import Profile from './components/Profile';         // Experience and education section
import Projects from './components/Projects';       // Portfolio projects showcase
import ProjectDetail from './components/ProjectDetail'; // Individual project view
import Skills from './components/Skills';           // Skills and technologies section
import Footer from './components/Footer';           // Contact and social links

// Import context providers for theme and language
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

// Import global styles
import './App.css';

function App() {
  return (
    // Wrap the app with language and theme providers for global state management
    <LanguageProvider>
      <ThemeProvider>
        {/* Set up routing with React Router */}
        <Router>
          {/* Main app container with responsive background */}
          <div className="App min-h-screen bg-white dark:bg-[#0A0A14]">
            {/* Top navigation bar - always visible */}
            <Top />
            
            {/* Define application routes */}
            <Routes>
              {/* Home page route with all main sections */}
              <Route path="/" element={
                <>
                  <HeroSection />  {/* Landing section with introduction */}
                  <Skills />       {/* Technical skills showcase */}
                  <Profile />      {/* Professional experience */}
                  <Projects />     {/* Portfolio projects grid */}
                  <Footer />       {/* Contact information */}
                </>
              } />
              {/* Individual project detail route */}
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;