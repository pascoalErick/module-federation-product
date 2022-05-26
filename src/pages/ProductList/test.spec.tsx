import { screen } from "@testing-library/react";
import { render } from "utils/testUtils";
import ProductList from ".";

describe("<ProductList />", () => {
  it("Should render correctly", () => {
    render(<ProductList />);

    expect(
      screen.getByRole("heading", { name: /produtos/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /criar novo/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /nome/i })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("columnheader", { name: /data de cadastro/i })
    ).not.toBeInTheDocument();
  });
});
