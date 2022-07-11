import styled from "styled-components";
import { darkRed } from "../../styleTokens/colors";
import { mediumSize } from "../../styleTokens/fontSizes";

export const StyledError = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${darkRed};
  font-size: ${mediumSize};
`;
