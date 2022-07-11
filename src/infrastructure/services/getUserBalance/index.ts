import { Wallet } from "../../../domain/entities/Wallet";
import { CryptoApi } from "../../../domain/types/cryptoApi";
import adaptUserBalance from "../../adapters/adaptUserBalance";
import api from "../../api";
import { sleep } from "../common/utils";

const getUserBalance = async (): Promise<Wallet> => {
  await sleep(1500);
  const { data } = await api.get<CryptoApi[]>("data/response.json");
  return adaptUserBalance(data);
};

export default getUserBalance;
