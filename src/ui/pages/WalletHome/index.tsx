import CryptoList from "./components/CryptoList";
import WalletBalance from "./components/WalletBalance";
import * as S from "./styles";

export default function WalletHome() {
  return (
    <S.HomeContainer>
      <WalletBalance name="Rafa" balance={500} />
      <CryptoList />
    </S.HomeContainer>
  );
}
