import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { RegisterForm } from ".";

describe("RegisterForm", () => {
  test("renders all input fields and submit button", () => {
    render(<RegisterForm />);

    expect(screen.getByPlaceholderText("Nome")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirme a senha")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /registrar/i })).toBeInTheDocument();
  });

  test("shows error messages for required fields when submitted empty", async () => {
    render(<RegisterForm />);
    fireEvent.click(screen.getByRole("button", { name: /registrar/i }));
    await waitFor(() => {
      expect(screen.getByText("Nome é obrigatório")).toBeInTheDocument();
      expect(screen.getByText("E-mail é obrigatório")).toBeInTheDocument();
      expect(screen.getByText("Senha é obrigatória")).toBeInTheDocument();
      expect(screen.getByText("Confirmação de senha é obrigatória")).toBeInTheDocument();
    });
  });

  test("submits the form data when fields are filled correctly", async () => {
    render(<RegisterForm />);

    fireEvent.input(screen.getByPlaceholderText("Nome"), { target: { value: "John Doe" } });
    fireEvent.input(screen.getByPlaceholderText("E-mail"), { target: { value: "john@example.com" } });
    fireEvent.input(screen.getByPlaceholderText("Senha"), { target: { value: "password123" } });
    fireEvent.input(screen.getByPlaceholderText("Confirme a senha"), { target: { value: "password123" } });

    fireEvent.click(screen.getByRole("button", { name: /registrar/i }));

    await waitFor(() => {
      expect(screen.queryByText("Nome é obrigatório")).not.toBeInTheDocument();
      expect(screen.queryByText("E-mail é obrigatório")).not.toBeInTheDocument();
      expect(screen.queryByText("Senha é obrigatória")).not.toBeInTheDocument();
      expect(screen.queryByText("Confirmação de senha é obrigatória")).not.toBeInTheDocument();
    });
  });
});
