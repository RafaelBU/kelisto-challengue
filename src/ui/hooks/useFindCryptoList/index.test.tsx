import { renderHook } from "@testing-library/react-hooks";
import useFindCryptoList from ".";
import * as getCryptoList from "../../../infrastructure/services/getCryptoList";
import { mockCrytoList } from "../../../infrastructure/services/getCryptoList/__fixtures__";

jest.mock("../../../infrastructure/services/getCryptoList", () => jest.fn());

describe("useFindCryptoList", () => {
  it("should load the list of cryptos", async () => {
    const mockFunction = getCryptoList.default as jest.Mock;
    mockFunction.mockReturnValueOnce(mockCrytoList);

    const { result, waitFor } = renderHook(() => useFindCryptoList());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.cryptoList).toHaveLength(0);

    await waitFor(() => expect(result.current.isLoading).toEqual(false));

    expect(result.current.cryptoList).toEqual(mockCrytoList);
    expect(result.current.errorMessage).toBe("");
    expect(mockFunction.mock.calls).toEqual([[]]);
  });

  it("should return the error message and data as empty array", async () => {
    const mockFunction = getCryptoList.default as jest.Mock;
    mockFunction.mockImplementationOnce(() => {
      throw new Error();
    });

    const { result } = renderHook(() => useFindCryptoList());

    expect(result.current.cryptoList).toHaveLength(0);

    expect(result.current.errorMessage).toBe(
      "There was an error, please try again"
    );
  });
});
