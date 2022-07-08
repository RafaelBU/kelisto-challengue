import styled from "styled-components";
import { ReactComponent as BellIcon } from "../../../../../assets/icons/icon-bell.svg";
import { white, darkGrey } from "../../../../styleTokens/colors";
import { bigSize, defaultSize } from "../../../../styleTokens/fontSizes";
import { loadAnimation } from "../../styles";

export const Container = styled.header`
  width: 100vw;
  height: 184px;
`;

export const Content = styled.div`
  animation: ${loadAnimation} 1.5s ease-in;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  margin-bottom: 44px;
`;

export const OwnerName = styled.h6`
  color: ${white};
  font-family: Roboto;
  font-weight: 500;
  font-size: ${defaultSize};
  margin: 0;
`;

export const StyledBellIcon = styled(BellIcon)`
  font-family: kelisto-frontend-challenge;
  width: 22px;
  height: 22px;
  position: absolute;
  right: 16px;
`;

export const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const BalanceTitle = styled.p`
  font-family: Roboto;
  font-size: ${defaultSize};
  font-weight: 400;
  line-height: 19px;
  color: ${darkGrey};
  margin-top: 0;
  margin-bottom: 8px;
`;

export const BalanceAmount = styled.p`
  font-family: Roboto;
  font-size: ${bigSize};
  font-weight: 500;
  line-height: 42px;
  color: ${white};
  margin: 0;
`;
