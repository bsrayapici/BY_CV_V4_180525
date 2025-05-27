import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Skills from './Skills';

describe('Skills Component', () => {
  const renderSkills = () => {
    render(
      <LanguageProvider>
        <Skills />
      </LanguageProvider>
    );
  };

  test('renders skills section title', () => {
    renderSkills();
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  test('renders all skill items', () => {
    renderSkills();
    expect(screen.getByAltText('Javascript')).toBeInTheDocument();
    expect(screen.getByAltText('React')).toBeInTheDocument();
    expect(screen.getByAltText('Node')).toBeInTheDocument();
    expect(screen.getByAltText('Figma')).toBeInTheDocument();
    expect(screen.getByAltText('Redux')).toBeInTheDocument();
    expect(screen.getByAltText('VS Code')).toBeInTheDocument();
  });
});