import { render, screen } from "@testing-library/react";
import Button from ".";
import { ReactComponent as BellIcon } from "../../../assets/icons/icon-bell.svg";

describe("Button component", () => {
  it("should render the title and not the icon", () => {
    render(<Button title="Example text" variant="primary" size="big" />);

    const title = screen.getByText(/example text/i);

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Example text");

    expect(screen.queryByLabelText(/button-icon/i)).not.toBeInTheDocument();
  });

  it("should render the icon and not the title", () => {
    render(<Button Icon={BellIcon} variant="secondary" size="small" />);

    expect(screen.getByLabelText(/button-icon/i)).toBeInTheDocument();

    expect(screen.queryByLabelText(/button-title/i)).not.toBeInTheDocument();
  });
});
