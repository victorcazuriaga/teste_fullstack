import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FormInput } from ".";

describe("FormInput Component", () => {
  it("renders the input with correct placeholder", () => {
    render(
      <FormInput
        type="text"
        id="name"
        placeholder="Nome"
        register={() => {}}
      />
    );
    const inputElement = screen.getByPlaceholderText("Nome");
    expect(inputElement).toBeInTheDocument();
  });

  it("renders the label when provided", () => {
    render(
      <FormInput
        type="text"
        id="name"
        placeholder="Nome"
        label="Nome Completo"
        register={() => {}}
      />
    );
    const labelElement = screen.getByText("Nome Completo");
    expect(labelElement).toBeInTheDocument();
  });

  it("shows the error message when there is an error", () => {
    render(
      <FormInput
        type="text"
        id="name"
        placeholder="Nome"
        error="Nome é obrigatório"
        register={() => {}}
      />
    );
    const errorMessage = screen.getByText("Nome é obrigatório");
    expect(errorMessage).toBeInTheDocument();
  });

  it("does not show the error message when there is no error", () => {
    render(
      <FormInput
        type="text"
        id="name"
        placeholder="Nome"
        register={() => {}}
      />
    );
    const errorMessage = screen.queryByText("Nome é obrigatório");
    expect(errorMessage).toBeNull();
  });
});
