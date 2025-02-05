import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

// Your tests here
describe('App Component', () => {
    test('renders an image with the correct alt text', () => {
      render(<App />);
      const imgElement = screen.getByAltText('A portrait of me');
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute('src', 'path/to/my-image.jpg');
    });
  
    test('renders a second-level heading with the text "About Me"', () => {
      render(<App />);
      const headingElement = screen.getByRole('heading', { level: 2 });
      expect(headingElement).toBeInTheDocument();
      expect(headingElement).toHaveTextContent('About Me');
    });
  
    test('renders a biography paragraph', () => {
      render(<App />);
      const paragraphElement = screen.getByText(/Hi, I'm ChatGPT, an AI language model created by OpenAI./i);
      expect(paragraphElement).toBeInTheDocument();
    });
  
    test('renders a link to GitHub with the correct href attribute', () => {
      render(<App />);
      const githubLink = screen.getByRole('link', { name: /GitHub/i });
      expect(githubLink).toBeInTheDocument();
      expect(githubLink).toHaveAttribute('href', 'https://github.com/yourusername');
    });
  
    test('renders a link to LinkedIn with the correct href attribute', () => {
      render(<App />);
      const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
      expect(linkedinLink).toBeInTheDocument();
      expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/yourusername');
    });
  });
