import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Footer from './Footer';

describe('Footer Component', () => {
  const renderFooter = () => {
    render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    );
  };

  test('renders social links', () => {
    renderFooter();
    expect(screen.getByText('Github')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('Personal Blog')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  test('renders call to action text', () => {
    renderFooter();
    expect(screen.getByText("Let's")).toBeInTheDocument();
    expect(screen.getByText('work together')).toBeInTheDocument();
  });
});