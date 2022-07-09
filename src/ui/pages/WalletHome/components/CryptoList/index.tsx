import { Crypto } from "../../../../../domain/entities/Crypto";
import Button from "../../../../components/Button";
import Loader from "../../../../components/Loader";
import { toFormatString } from "../../../../utils";
import * as S from "./styles";

const isPositive = (amount: number) => amount > 0;
const getSymbol = (amount: number) => (isPositive(amount) ? "+" : "");

export default function CryptoList({
  list,
  isLoading,
}: {
  list: Crypto[];
  isLoading: boolean;
}) {
  return (
    <S.Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <S.Content aria-label="list-content">
            <S.ListTitle aria-label="list-title">Recent</S.ListTitle>
            {list.map(({ id, cryptoName, nick, currencyValue, difference }) => (
              <S.CryptoRow key={id} aria-label="list-row">
                <S.Ellipse aria-label={`ellipse-${id}`} />
                <S.NamesBlock>
                  <S.CryptoName aria-label={`crypto-name-${id}`}>
                    {cryptoName}
                  </S.CryptoName>
                  <S.CryptoNick aria-label={`crypto-nick-${id}`}>
                    {nick}
                  </S.CryptoNick>
                </S.NamesBlock>
                <S.AmountBlock>
                  <S.CryptoAmount aria-label={`crypto-amount-${id}`}>
                    {toFormatString({ amount: currencyValue })}
                  </S.CryptoAmount>
                  <S.DifferencePercentage
                    isPositive={isPositive(difference)}
                    aria-label={`crypto-difference-${id}`}
                  >{`${getSymbol(
                    difference
                  )}${difference}%`}</S.DifferencePercentage>
                </S.AmountBlock>
              </S.CryptoRow>
            ))}
          </S.Content>
          <Button title="Show all transactions" variant="primary" size="big" />
        </>
      )}
    </S.Container>
  );
}
