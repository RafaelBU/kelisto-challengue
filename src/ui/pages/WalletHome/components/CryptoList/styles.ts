import styled from "styled-components";
import {
  black,
  lightGrey,
  mediumGrey,
  white,
  darkRed,
  darkGreen,
} from "../../../../styleTokens/colors";
import { mainRadius } from "../../../../styleTokens/bordersRadius";
import { defaultSize, mediumSize } from "../../../../styleTokens/fontSizes";
import { loadAnimation } from "../../styles";

type DifferenceProps = {
  isPositive: boolean;
};

export const Container = styled.div`
  background-color: ${white};
  border-top-left-radius: ${mainRadius};
  border-top-right-radius: ${mainRadius};
  height: calc(100vh - 184px);
  padding: 28px 16px;
`;

export const Content = styled.div`
  margin: 0 16px 87px 16px;
  animation: ${loadAnimation} 1.5s ease-in;
`;

export const ListTitle = styled.h6`
  margin-top: 0;
  margin-bottom: 37px;
  font-size: ${mediumSize};
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.1em;
  color: ${mediumGrey};
`;

export const CryptoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const Ellipse = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: ${lightGrey};
  margin-bottom: 6px;
`;

export const NamesBlock = styled.div`
  margin-left: 25px;
`;

export const CryptoName = styled.p`
  color: ${black};
  margin-top: 0;
  margin-bottom: 4px;
  font-size: ${mediumSize};
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
`;

export const CryptoNick = styled.p`
  color: ${mediumGrey};
  margin: 0;
  font-size: ${mediumSize};
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
`;

export const AmountBlock = styled.div`
  flex: 1;
  text-align: right;
`;

export const CryptoAmount = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: ${mediumSize};
  line-height: 21px;
`;

export const DifferencePercentage = styled.p<DifferenceProps>`
  margin: 0;
  font-size: ${defaultSize};
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  color: ${(props) => (props.isPositive ? darkGreen : darkRed)};
`;
