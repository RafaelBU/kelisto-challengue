import { render, screen } from "@testing-library/react";
import WalletBalance from ".";

describe("WalletBalance component", () => {
  it("should render all the correct elements", () => {
    render(<WalletBalance name="Rafa" balance={500} />);

    const ownerName = screen.getByRole("heading", { name: /hi rafa/i });
    const bellIcon = screen.getByLabelText(/bell-icon/i);
    const balanceTitle = screen.getByLabelText(/balance-title/i);
    const balanceAmount = screen.getByLabelText(/balance-amount/i);

    expect(ownerName).toBeInTheDocument();
    expect(ownerName).toHaveTextContent(/Hi Rafa/i);
    expect(bellIcon).toBeInTheDocument();
    expect(balanceTitle).toBeInTheDocument();
    expect(balanceTitle).toHaveTextContent(/your balance/i);
    expect(balanceAmount).toBeInTheDocument();
    expect(balanceAmount).toHaveTextContent("500");
  });
});
