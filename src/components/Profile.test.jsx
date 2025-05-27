import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Profile from './Profile';

describe('Profile Component', () => {
  const renderProfile = () => {
    render(
      <LanguageProvider>
        <Profile />
      </LanguageProvider>
    );
  };

  test('renders profile section', () => {
    renderProfile();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  test('renders experience section', () => {
    renderProfile();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
  });

  test('renders education section', () => {
    renderProfile();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Computer Science')).toBeInTheDocument();
    expect(screen.getByText('University of Technology')).toBeInTheDocument();
  });
});