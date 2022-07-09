import responseData from "../../../data/response.json";
import { Crypto } from "../../../domain/entities/Crypto";
import { CryptoApi } from "../../../domain/types/cryptoApi";
import adaptCryptoList from "../../adapters/adaptCryptoList";
import { sleep } from "../utils";

const getCryptoList = async (): Promise<Crypto[]> => {
  await sleep(1500);
  const data = await new Promise<CryptoApi[]>((resolve) => {
    resolve(responseData);
  });
  return adaptCryptoList(data);
};

export default getCryptoList;
