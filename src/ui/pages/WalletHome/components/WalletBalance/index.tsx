import Loader from "../../../../components/Loader";
import { white } from "../../../../styleTokens/colors";
import { toFormatString } from "../../../../utils";
import * as S from "./styles";

export default function WalletBalance({
  name,
  balance,
  isLoading,
}: {
  name: string;
  balance: number;
  isLoading: boolean;
}) {
  return (
    <S.Container>
      {isLoading ? (
        <Loader />
      ) : (
        <S.Content>
          <S.HeaderRow>
            <S.OwnerName>{`Hi ${name}`}</S.OwnerName>
            <S.StyledBellIcon color={white} aria-label="bell-icon" />
          </S.HeaderRow>
          <S.BalanceContainer>
            <S.BalanceTitle aria-label="balance-title">
              your balance
            </S.BalanceTitle>
            <S.BalanceAmount aria-label="balance-amount">
              {toFormatString({ amount: balance })}
            </S.BalanceAmount>
          </S.BalanceContainer>
        </S.Content>
      )}
    </S.Container>
  );
}
