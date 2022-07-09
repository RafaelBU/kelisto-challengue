import {
  cleanup,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import WalletHome from ".";
import * as getUserBalance from "../../../infrastructure/services/getUserBalance";
import * as getCryptoList from "../../../infrastructure/services/getCryptoList";
import { mockWalletBalance } from "../../../infrastructure/services/getUserBalance/__fixtures__";
import { mockCryptoList } from "../../../infrastructure/services/getCryptoList/__fixtures__";

jest.mock("../../../infrastructure/services/getUserBalance", () => jest.fn());
jest.mock("../../../infrastructure/services/getCryptoList", () => jest.fn());

const mockGetUserBalance = getUserBalance.default as jest.Mock;
const mockGetCryptoList = getCryptoList.default as jest.Mock;

describe("WalletHome page", () => {
  afterEach(() => {
    cleanup();
  });

  it("should have the correct flow of loaders and data in the components", async () => {
    mockGetUserBalance.mockReturnValueOnce(mockWalletBalance);
    mockGetCryptoList.mockReturnValueOnce(mockCryptoList);

    render(<WalletHome />);

    const loaders = screen.getAllByLabelText(/loader/i);
    const loaderBalance = loaders[0];
    const loaderList = loaders[1];

    expect(loaders).toHaveLength(2);
    expect(loaderBalance).toBeInTheDocument();
    expect(loaderList).toBeInTheDocument();

    await waitForElementToBeRemoved(loaderBalance);

    expect(screen.getByLabelText(/balance-content/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/list-content/i)).toBeInTheDocument();
  });

  it("should have the correct data from balance and cryptos services api calls", async () => {
    mockGetUserBalance.mockReturnValueOnce(mockWalletBalance);
    mockGetCryptoList.mockReturnValueOnce(mockCryptoList);

    render(<WalletHome />);

    const loaders = screen.getAllByLabelText(/loader/i);
    const loaderBalance = loaders[0];

    await waitForElementToBeRemoved(loaderBalance);

    expect(mockGetUserBalance.mock.calls).toEqual([[]]);
    expect(mockGetUserBalance.mock.results[0].value).toEqual(mockWalletBalance);

    expect(mockGetCryptoList.mock.calls).toEqual([[]]);
    expect(mockGetCryptoList.mock.results[0].value).toEqual(mockCryptoList);
  });
});
