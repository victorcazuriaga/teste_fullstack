import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoginForm } from '.';

describe('LoginForm', () => {
    test('renders email and password fields', () => {
        render(<LoginForm />);
        
        const emailInput = screen.getByPlaceholderText(/email@example.com/i);
        const passwordInput = screen.getByPlaceholderText(/senha/i);
        
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });

    test('renders "Lembrar-me" checkbox', () => {
        render(<LoginForm />);
        
        const checkboxLabel = screen.getByLabelText(/lembrar-me/i);
        
        expect(checkboxLabel).toBeInTheDocument();
    });

    test('displays validation errors when fields are empty', async () => {
        render(<LoginForm />);
        
        const submitButton = screen.getByRole('button', { name: /entrar/i });
        fireEvent.click(submitButton);
        await act(async () => {
            fireEvent.click(submitButton);
        });

        const emailError = await screen.findByText(/E-mail é obrigatório/i);
        const passwordError = await screen.findByText(/Senha é obrigatória/i);

        expect(emailError).toBeInTheDocument();
        expect(passwordError).toBeInTheDocument();
    });

    test('does not display validation errors when fields are filled', async () => {
        render(<LoginForm />);
        
        const emailInput = screen.getByPlaceholderText(/email@example.com/i);
        const passwordInput = screen.getByPlaceholderText(/senha/i);
        const submitButton = screen.getByRole('button', { name: /entrar/i });
          
            await act(async () => {
                fireEvent.change(emailInput, { target: { value: 'joao' } });
                fireEvent.change(passwordInput, { target: { value: '1234' } });
                fireEvent.click(submitButton);
            }  );
            expect(screen.queryByText(/E-mail é obrigatório/i)).not.toBeInTheDocument();
            expect(screen.queryByText(/Senha é obrigatória/i)).not.toBeInTheDocument();
    });

    test('submits form when fields are filled', async () => {
        render(<LoginForm />);

        const emailInput = screen.getByPlaceholderText(/email@example.com/i);
        const passwordInput = screen.getByPlaceholderText(/senha/i);
        const submitButton = screen.getByRole('button', { name: /entrar/i });

        await act(async () => {
            fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
            fireEvent.change(passwordInput, { target: { value: 'password123' } });
            fireEvent.click(submitButton);
        });

        expect(screen.queryByText(/e-mail é obrigatório/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/senha é obrigatória/i)).not.toBeInTheDocument();
    });
});
