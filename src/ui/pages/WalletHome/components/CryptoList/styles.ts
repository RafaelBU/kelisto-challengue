import styled from "styled-components";
import { white } from "../../../../styleTokens/colors";
import { mainRadius } from "../../../../styleTokens/bordersRadius";

export const Container = styled.div`
  background-color: ${white};
  border-top-left-radius: ${mainRadius};
  border-top-right-radius: ${mainRadius};
  height: calc(100vh - 184px);
`;
