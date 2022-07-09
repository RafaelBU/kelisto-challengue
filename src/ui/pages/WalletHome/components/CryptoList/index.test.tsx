import { render, screen } from "@testing-library/react";
import CryptoList from ".";
import { mockCryptoList } from "../../../../../infrastructure/services/getCryptoList/__fixtures__";
import { toFormatString } from "../../../../utils";

describe("CryptoList component", () => {
  it("should render all the correct elements", () => {
    render(<CryptoList list={mockCryptoList} isLoading={false} />);

    const title = screen.getByLabelText(/list-title/i);
    const numRows = screen.getAllByLabelText(/list-row/i);

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(/recent/i);
    expect(numRows).toHaveLength(2);

    mockCryptoList.forEach(
      ({ id, cryptoName, nick, currencyValue, difference }) => {
        const ellipse = screen.getByLabelText(`ellipse-${id}`);
        const cryptoNameElement = screen.getByLabelText(`crypto-name-${id}`);
        const cryptoNickElement = screen.getByLabelText(`crypto-nick-${id}`);
        const cryptoCurrencyElement = screen.getByLabelText(
          `crypto-amount-${id}`
        );
        const cryptoDifference = screen.getByLabelText(
          `crypto-difference-${id}`
        );

        expect(ellipse).toBeInTheDocument();

        expect(cryptoNameElement).toBeInTheDocument();
        expect(cryptoNameElement).toHaveTextContent(cryptoName);

        expect(cryptoNickElement).toBeInTheDocument();
        expect(cryptoNickElement).toHaveTextContent(nick);

        expect(cryptoCurrencyElement).toBeInTheDocument();
        expect(cryptoCurrencyElement).toHaveTextContent(
          toFormatString({ amount: currencyValue })
        );

        expect(cryptoDifference).toBeInTheDocument();
        expect(cryptoDifference).toHaveTextContent(`${difference}`);
      }
    );
  });

  it("should render only the loader when data call is loading", () => {
    render(<CryptoList list={mockCryptoList} isLoading={true} />);

    expect(screen.getByLabelText(/loader/i)).toBeInTheDocument();

    expect(screen.queryByLabelText(/list-content/i)).not.toBeInTheDocument();
  });
});
