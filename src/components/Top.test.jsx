import { render, screen, fireEvent } from '@testing-library/react';
import Top from './Top';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';

describe('Top Component', () => {
  const renderTop = () => {
    render(
      <LanguageProvider>
        <ThemeProvider>
          <Top />
        </ThemeProvider>
      </LanguageProvider>
    );
  };

  test('renders dark mode toggle', () => {
    renderTop();
    expect(screen.getByText(/DARK MODE/i)).toBeInTheDocument();
  });

  test('renders language switcher', () => {
    renderTop();
    const languageSwitch = screen.getByText(/TÜRKÇE/i);
    expect(languageSwitch).toBeInTheDocument();
  });

  test('switches language when clicked', () => {
    renderTop();
    const languageSwitch = screen.getByText(/TÜRKÇE/i);
    fireEvent.click(languageSwitch);
    expect(screen.getByText(/SWITCH TO/i)).toBeInTheDocument();
  });
});