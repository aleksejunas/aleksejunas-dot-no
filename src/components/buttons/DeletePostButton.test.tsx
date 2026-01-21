import { render, screen, fireEvent } from '@testing-library/react';
import DeletePostButton from './DeletePostButton';

describe('DeletePostButton', () => {
  const mockAction = jest.fn();

  beforeEach(() => {
    mockAction.mockClear();
  });

  it('should render with default style', () => {
    render(<DeletePostButton postId="1" action={mockAction} />);
    expect(screen.getByText('Slett')).toBeInTheDocument();
  });

  it('should render with simple button style when useActionButtonStyle is false', () => {
    render(<DeletePostButton postId="1" action={mockAction} useActionButtonStyle={false} />);
    expect(screen.getByText('Slett')).toBeInTheDocument();
  });

  it('should show loading state when clicked', async () => {
    render(<DeletePostButton postId="1" action={mockAction} />);
    
    // Mock confirm to return true
    window.confirm = jest.fn(() => true);
    
    const button = screen.getByText('Slett');
    fireEvent.click(button);
    
    // Should show loading text
    expect(screen.getByText('Sletter...')).toBeInTheDocument();
    
    // Button should be disabled
    expect(button).toBeDisabled();
  });

  it('should not submit when confirm is cancelled', () => {
    render(<DeletePostButton postId="1" action={mockAction} />);
    
    // Mock confirm to return false
    window.confirm = jest.fn(() => false);
    
    const button = screen.getByText('Slett');
    fireEvent.click(button);
    
    // Should not show loading text
    expect(screen.getByText('Slett')).toBeInTheDocument();
    expect(mockAction).not.toHaveBeenCalled();
  });
});