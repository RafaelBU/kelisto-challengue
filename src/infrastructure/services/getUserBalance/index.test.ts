import MockAdapter from "axios-mock-adapter";
import getUserBalance from ".";
import api from "../../api";
import { mockCryptoApiResponse } from "../common/__fixtures__";
import { mockWalletBalance } from "./__fixtures__";

describe("getUserBalance service", () => {
  const url = "data/response.json";
  const axiosMock = new MockAdapter(api);

  afterEach(() => {
    axiosMock.reset();
  });

  it("should call and return correct data when api is ok", async () => {
    axiosMock.onGet(url).reply(200, mockCryptoApiResponse);

    const data = await getUserBalance();

    expect(data).toEqual(mockWalletBalance);
    expect(axiosMock.history.get[0].url).toEqual(url);
  });

  it("should fail when unathorized", async () => {
    axiosMock.onGet(url).reply(401);
    let data;
    let errorMessage = "";

    try {
      data = await getUserBalance();
    } catch (error) {
      errorMessage = (error as Error).message;
    }

    expect(axiosMock.history.get[0].url).toEqual(url);
    expect(errorMessage).toBe("Request failed with status code 401");
    expect(data).toBe(undefined);
  });
});
