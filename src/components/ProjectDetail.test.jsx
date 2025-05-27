import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '../contexts/LanguageContext';
import { BrowserRouter } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';

// Mock useParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '0' }),
}));

describe('ProjectDetail Component', () => {
  const renderProjectDetail = () => {
    render(
      <BrowserRouter>
        <LanguageProvider>
          <ProjectDetail />
        </LanguageProvider>
      </BrowserRouter>
    );
  };

  test('renders project details', () => {
    renderProjectDetail();
    expect(screen.getByText('Random Jokes')).toBeInTheDocument();
    expect(screen.getByText('Technologies Used')).toBeInTheDocument();
    expect(screen.getByText('View Live Demo')).toBeInTheDocument();
    expect(screen.getByText('View Source Code')).toBeInTheDocument();
  });

  test('renders back to projects link', () => {
    renderProjectDetail();
    expect(screen.getByText('← Back to projects')).toBeInTheDocument();
  });
});