import { Crypto } from "../../../../domain/entities/Crypto";

export const mockCryptoList: Crypto[] = [
  {
    id: "123",
    cryptoName: "Bitcoin",
    nick: "BTC",
    currencyValue: 100,
    difference: -1.5,
  },
  {
    id: "456",
    cryptoName: "Ethereum",
    nick: "ETH",
    currencyValue: 200,
    difference: -8.3,
  },
];
