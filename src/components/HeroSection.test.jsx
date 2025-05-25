import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';
import { data } from '../constants/data';

const mockLanguage = 'en';
const mockTheme = 'light';

const mockHero = data[mockLanguage].heroSection;

const renderWithProviders = () => {
  render(
    <ThemeContext.Provider value={{ theme: mockTheme }}>
      <LanguageContext.Provider value={{ language: mockLanguage }}>
        <HeroSection />
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

describe('HeroSection', () => {
  test('renders greeting and intro text', () => {
    renderWithProviders();

    // Başlıkları test et
    expect(screen.getByText(mockHero.greeting)).toBeInTheDocument();
    expect(screen.getByText(mockHero.intro)).toBeInTheDocument();
  });

  test('renders social media links', () => {
    renderWithProviders();

    mockHero.socials.forEach(social => {
      expect(screen.getByAltText(social.alt_text)).toBeInTheDocument();
    });
  });

  test('renders profile image', () => {
    renderWithProviders();

    const profileImg = screen.getByAltText('profile');
    expect(profileImg).toBeInTheDocument();
    expect(profileImg).toHaveAttribute('src', expect.stringContaining('profile-image'));
  });
}); 