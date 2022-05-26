import { ReactElement } from "react";
import { render } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

const customRender = (ui: ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

export * from "@testing-library/react";
export { customRender as render };
