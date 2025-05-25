import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

describe('App Component', () => {
  test("renders without crashing", () => {
    render(
      <LanguageProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </LanguageProvider>
    );
    
    // Check if main sections are rendered
    expect(screen.getByText(/Hi!/i)).toBeInTheDocument();
    expect(screen.getByText(/Skills/i)).toBeInTheDocument();
    expect(screen.getByText(/Profile/i)).toBeInTheDocument();
  });
});