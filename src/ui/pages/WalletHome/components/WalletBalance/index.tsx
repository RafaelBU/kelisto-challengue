import { white } from "../../../../styleTokens/colors";
import * as S from "./styles";

export default function WalletBalance({
  name,
  balance,
}: {
  name: string;
  balance: number;
}) {
  return (
    <S.Container>
      <S.HeaderRow>
        <S.OwnerName>{`Hi ${name}`}</S.OwnerName>
        <S.StyledBellIcon color={white} aria-label="bell-icon" />
      </S.HeaderRow>
      <S.BalanceContainer>
        <S.BalanceTitle aria-label="balance-title">your balance</S.BalanceTitle>
        <S.BalanceAmount aria-label="balance-amount">{balance}</S.BalanceAmount>
      </S.BalanceContainer>
    </S.Container>
  );
}
