import styled from "styled-components";
import { ReactComponent as DashboardIcon } from "../../../assets/icons/icon-dashboard.svg";
import { ReactComponent as CardIcon } from "../../../assets/icons/icon-card.svg";
import { ReactComponent as RefreshIcon } from "../../../assets/icons/icon-refresh.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/icons/icon-settings.svg";
import { white } from "../../styleTokens/colors";

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  margin: 32px 0;
  background-color: ${white};

  @media (min-width: 1024px) {
    justify-content: space-evenly;
  }
`;

export const StyledDashboardIcon = styled(DashboardIcon)`
  font-family: kelisto-frontend-challenge;
  width: 24px;
  height: 22px;
`;

export const StyledCardIcon = styled(CardIcon)`
  font-family: kelisto-frontend-challenge;
  width: 24px;
  height: 22px;
`;

export const StyledRefreshIcon = styled(RefreshIcon)`
  font-family: kelisto-frontend-challenge;
  width: 24px;
  height: 22px;
`;

export const StyledSetingsIcon = styled(SettingsIcon)`
  font-family: kelisto-frontend-challenge;
  width: 24px;
  height: 22px;
`;
