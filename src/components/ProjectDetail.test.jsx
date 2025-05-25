import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';
import { LanguageProvider } from '../contexts/LanguageContext';

// Mock useParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '0' }),
}));

describe('ProjectDetail Component', () => {
  const renderProjectDetail = () => {
    render(
      <LanguageProvider>
        <BrowserRouter>
          <ProjectDetail />
        </BrowserRouter>
      </LanguageProvider>
    );
  };

  test('renders project details', () => {
    renderProjectDetail();
    expect(screen.getByText('Random Jokes')).toBeInTheDocument();
    expect(screen.getByText(/A fun web app/)).toBeInTheDocument();
  });

  test('renders technology tags', () => {
    renderProjectDetail();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Vite')).toBeInTheDocument();
  });

  test('renders action buttons', () => {
    renderProjectDetail();
    expect(screen.getByText('View Live Demo')).toBeInTheDocument();
    expect(screen.getByText('View Source Code')).toBeInTheDocument();
  });
});