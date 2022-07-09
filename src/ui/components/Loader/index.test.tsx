import { render, screen } from "@testing-library/react";
import Loader from ".";

describe("Loader component", () => {
  it("should render all the dots", () => {
    render(<Loader />);

    expect(screen.getByLabelText(/loader/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/dot-1/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/dot-2/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/dot-3/i)).toBeInTheDocument();
  });
});
