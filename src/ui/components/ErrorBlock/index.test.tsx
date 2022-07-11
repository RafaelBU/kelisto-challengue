import { render, screen } from "@testing-library/react";
import ErrorBlock from ".";

describe("ErrorBlock component", () => {
  it("should render the message", () => {
    render(<ErrorBlock message="Some error" />);

    const message = screen.getByText(/some error/i);
    expect(message).toBeInTheDocument();
    expect(message).toHaveTextContent("Some error");
  });
});
