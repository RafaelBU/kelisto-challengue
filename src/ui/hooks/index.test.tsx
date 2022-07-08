import { renderHook } from "@testing-library/react-hooks";
import * as getUserBalance from "../../infrastructure/services/getUserBalance";
import { mockWalletBalance } from "../../infrastructure/services/__fixtures__";
import useFindUserBalance from "./useFindUserBalance";

jest.mock("../../infrastructure/services/getUserBalance", () => jest.fn());

describe("useFindUserBalance", () => {
  it("should load the balance of the user", async () => {
    const mockFunction = getUserBalance.default as jest.Mock;
    mockFunction.mockReturnValueOnce(mockWalletBalance);
    const { result, waitFor } = renderHook(() => useFindUserBalance());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.userBalance).toBe(undefined);

    await waitFor(() => expect(result.current.isLoading).toEqual(false));

    expect(result.current.userBalance).toEqual(mockWalletBalance);
    expect(result.current.errorMessage).toBe("");
    expect(mockFunction.mock.calls).toEqual([[]]);
  });

  it("should return the error message and data as null", async () => {
    const mockFunction = getUserBalance.default as jest.Mock;
    mockFunction.mockImplementationOnce(() => {
      throw new Error();
    });
    const { result } = renderHook(() => useFindUserBalance());

    expect(result.current.userBalance).toBe(null);

    expect(result.current.errorMessage).toBe(
      "There was an error, please try again"
    );
  });
});
