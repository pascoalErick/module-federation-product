import { screen } from "@testing-library/react";
import { render } from "utils/testUtils";
import ProductCreate from ".";

describe("<ProductCreate />", () => {
  it("Should render correctly", () => {
    render(<ProductCreate />);

    expect(
      screen.getByRole("heading", { name: /criar produto/i })
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/código/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/local/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/apelido/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /cancelar/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /salvar/i })).toBeInTheDocument();
  });
});
