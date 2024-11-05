import { render, screen } from '@testing-library/react';
import {Logo} from '.';

describe('Logo Component', () => {
  it('renders with default size medium', () => {
    render(<Logo />);
    const logoElement = screen.getByText(/logo/i);
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveClass('text-2xl');
  });

  it('renders with small size', () => {
    render(<Logo size="small" />);
    const logoElement = screen.getByText(/logo/i);
    expect(logoElement).toHaveClass('text-lg');
  });

  it('renders with large size', () => {
    render(<Logo size="large" />);
    const logoElement = screen.getByText(/logo/i);
    expect(logoElement).toHaveClass('text-4xl');
  });

  it('renders with additional className', () => {
    render(<Logo className="text-red-500" />);
    const logoElement = screen.getByText(/logo/i);
    expect(logoElement).toHaveClass('text-red-500');
  });
});
