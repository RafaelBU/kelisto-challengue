//import useFindCryptoList from "../../hooks/useFindCryptoList";
import useFindUserBalance from "../../hooks/useFindUserBalance";
import CryptoList from "./components/CryptoList";
import WalletBalance from "./components/WalletBalance";
import * as S from "./styles";

export default function WalletHome() {
  const { userBalance, isLoading: isLoadingBalance } = useFindUserBalance();
  //const { cryptoList, isLoading: isLoadingList } = useFindCryptoList();

  return (
    <S.HomeContainer>
      <WalletBalance
        name={userBalance?.owner as string}
        balance={userBalance?.balance as number}
        isLoading={isLoadingBalance}
      />
      <CryptoList />
    </S.HomeContainer>
  );
}
