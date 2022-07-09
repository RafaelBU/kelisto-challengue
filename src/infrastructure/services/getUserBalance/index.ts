import responseData from "../../../data/response.json";
import { Wallet } from "../../../domain/entities/Wallet";
import { CryptoApi } from "../../../domain/types/cryptoApi";
import adaptUserBalance from "../../adapters/adaptUserBalance";
import { sleep } from "../utils";

const getUserBalance = async (): Promise<Wallet> => {
  await sleep(1500);
  const data = await new Promise<CryptoApi[]>((resolve) => {
    resolve(responseData);
  });
  return adaptUserBalance(data);
};

export default getUserBalance;
