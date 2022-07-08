import { Wallet } from "../../domain/entities/Wallet";
import { CryptoApi } from "../../domain/types/cryptoApi";

const adaptUserBalance = (data: CryptoApi[]): Wallet => {
  const balanceAmounts = data.reduce((acc, current) => {
    return acc + current.stock;
  }, 0);

  return {
    id: "456",
    owner: "Rafa",
    balance: balanceAmounts,
  };
};

export default adaptUserBalance;
