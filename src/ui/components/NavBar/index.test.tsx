import { render, screen } from "@testing-library/react";
import NavBar from ".";

describe("Navbar component", () => {
  it("should render all the menu options", () => {
    render(<NavBar />);

    expect(screen.getAllByLabelText(/button-icon/i)).toHaveLength(4);
  });
});
