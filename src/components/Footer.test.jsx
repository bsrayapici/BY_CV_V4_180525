import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { LanguageProvider } from '../contexts/LanguageContext';

describe('Footer Component', () => {
  const renderFooter = () => {
    render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    );
  };

  test('renders social media links', () => {
    renderFooter();
    expect(screen.getByText('Github')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('Personal Blog')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  test('renders call-to-action text', () => {
    renderFooter();
    expect(screen.getByText("Let's")).toBeInTheDocument();
    expect(screen.getByText('work together')).toBeInTheDocument();
  });

  test('all links have proper attributes', () => {
    renderFooter();
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});