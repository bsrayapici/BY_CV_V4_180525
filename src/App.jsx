import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Top from './components/Top';
import HeroSection from './components/HeroSection';
import Profile from './components/Profile';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <div className="App min-h-screen bg-white dark:bg-[#0A0A14]">
            <Top />
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  <Skills />
                  <Profile />
                  <Projects />
                  <Footer />
                </>
              } />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;