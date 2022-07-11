import { cleanup, render, screen } from "@testing-library/react";
import WalletBalance from ".";

describe("WalletBalance component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render all the correct elements", () => {
    render(
      <WalletBalance name="Rafa" balance={500} isLoading={false} error="" />
    );

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
    expect(balanceAmount).toHaveTextContent("$500");
  });

  it("should render only the loader when data call is loading", () => {
    render(<WalletBalance name="Rafa" balance={0} isLoading={true} error="" />);

    expect(screen.getByLabelText(/loader/i)).toBeInTheDocument();

    expect(
      screen.queryByRole("heading", { name: /hi rafa/i })
    ).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/bell-icon/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/balance-title/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/balance-amount/i)).not.toBeInTheDocument();
  });

  it("should render the error instead of the balance content", () => {
    render(
      <WalletBalance
        name="Rafa"
        balance={0}
        isLoading={false}
        error="Balance error"
      />
    );

    expect(screen.getByText(/balance error/i)).toBeInTheDocument();

    expect(
      screen.queryByRole("heading", { name: /hi rafa/i })
    ).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/bell-icon/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/balance-title/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/balance-amount/i)).not.toBeInTheDocument();
  });
});
