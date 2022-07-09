import { Crypto } from "../../../domain/entities/Crypto";
import { CryptoApi } from "../../../domain/types/cryptoApi";

const adaptCryptoList = (data: CryptoApi[]): Crypto[] => {
  return data.map(({ id, name, sku, stock, variant }) => ({
    id,
    cryptoName: name,
    nick: sku,
    currencyValue: stock,
    difference: variant,
  }));
};

export default adaptCryptoList;
