import { useState, useEffect } from "react";
import { Crypto } from "../../../domain/entities/Crypto";
import getCryptoList from "../../../infrastructure/services/getCryptoList";

export default function useFindCryptoList() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cryptoList, setCryptoList] = useState<Crypto[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const fecthCryptoList = async () => {
      try {
        const response = await getCryptoList();
        setCryptoList(response);
      } catch {
        setErrorMessage("There was an error, please try again");
      } finally {
        setIsLoading(false);
      }
    };

    if (isLoading && cryptoList.length === 0) {
      fecthCryptoList();
    }
  }, [isLoading, cryptoList]);

  return { cryptoList, isLoading, errorMessage };
}
