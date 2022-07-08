import styled, { keyframes } from "styled-components";
import { darkBlue } from "../../styleTokens/colors";

export const HomeContainer = styled.div`
  background-color: ${darkBlue};
`;

export const loadAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;
