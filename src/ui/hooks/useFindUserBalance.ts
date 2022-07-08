import { useState, useEffect } from "react";
import { Wallet } from "../../domain/entities/Wallet";
import getUserBalance from "../../infrastructure/services/getUserBalance";

export default function useFindUserBalance() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userBalance, setUserBalance] = useState<Wallet | undefined | null>(
    undefined
  );
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const fecthUserBalance = async () => {
      try {
        const response = await getUserBalance();
        setUserBalance(response);
      } catch {
        setUserBalance(null);
        setErrorMessage("There was an error, please try again");
      } finally {
        setIsLoading(false);
      }
    };

    if (isLoading && userBalance === undefined) {
      fecthUserBalance();
    }
  }, [isLoading, userBalance]);

  return { userBalance, isLoading, errorMessage };
}
