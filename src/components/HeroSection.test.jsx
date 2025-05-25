import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';

describe('HeroSection Component', () => {
  const renderHeroSection = () => {
    render(
      <LanguageProvider>
        <ThemeProvider>
          <HeroSection />
        </ThemeProvider>
      </LanguageProvider>
    );
  };

  test('renders greeting and intro text', () => {
    renderHeroSection();
    expect(screen.getByText(/Hi!/i)).toBeInTheDocument();
    expect(screen.getByText(/I'm Almila/i)).toBeInTheDocument();
  });

  test('renders social media links', () => {
    renderHeroSection();
    expect(screen.getByAltText('linkedin')).toBeInTheDocument();
    expect(screen.getByAltText('github')).toBeInTheDocument();
  });

  test('renders profile image', () => {
    renderHeroSection();
    expect(screen.getByAltText('profile')).toBeInTheDocument();
  });
});