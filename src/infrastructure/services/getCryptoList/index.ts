import { Crypto } from "../../../domain/entities/Crypto";
import { CryptoApi } from "../../../domain/types/cryptoApi";
import adaptCryptoList from "../../adapters/adaptCryptoList";
import api from "../../api";
import { sleep } from "../common/utils";

const getCryptoList = async (): Promise<Crypto[]> => {
  await sleep(1500);
  const { data } = await api.get<CryptoApi[]>("data/response.json");
  return adaptCryptoList(data);
};

export default getCryptoList;
