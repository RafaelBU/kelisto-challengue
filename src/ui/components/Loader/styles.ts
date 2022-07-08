import styled, { keyframes } from "styled-components";
import { darkGreen } from "../../styleTokens/colors";

interface Props {
  delay: string;
}

const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Dot = styled.div<Props>`
  background-color: ${darkGreen};
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;
