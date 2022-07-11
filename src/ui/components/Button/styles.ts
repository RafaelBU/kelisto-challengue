import styled from "styled-components";
import { buttonRadius } from "../../styleTokens/bordersRadius";
import { darkBlue, darkGrey, white } from "../../styleTokens/colors";
import { defaultSize } from "../../styleTokens/fontSizes";

const propsFromVariant = ({
  typeProp,
  variant,
}: {
  typeProp: "background-color" | "color" | "border";
  variant: "primary" | "secondary";
}): string => {
  const config = {
    "background-color": {
      primary: darkBlue,
      secondary: white,
    },
    color: {
      primary: white,
      secondary: darkBlue,
    },
    border: {
      primary: "none",
      secondary: `1px solid ${darkGrey}`,
    },
  };

  return config[typeProp][variant];
};

const propsFromSize = ({
  typeProp,
  size,
}: {
  typeProp: "padding" | "width";
  size: "big" | "small";
}): string => {
  const config = {
    padding: {
      big: "22px 0",
      small: "21px",
    },
    width: {
      big: "100%",
      small: "auto",
    },
  };

  return config[typeProp][size];
};

type Props = {
  variant: "primary" | "secondary";
  size: "big" | "small";
};

export const StyledButton = styled.button<Props>`
  background-color: ${(props) =>
    propsFromVariant({ typeProp: "background-color", variant: props.variant })};
  color: ${(props) =>
    propsFromVariant({ typeProp: "color", variant: props.variant })};
  padding: ${(props) =>
    propsFromSize({ typeProp: "padding", size: props.size })};
  width: ${(props) => propsFromSize({ typeProp: "width", size: props.size })};
  border-radius: ${buttonRadius};
  border: ${(props) =>
    propsFromVariant({ typeProp: "border", variant: props.variant })};
  font-size: ${defaultSize};
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  cursor: pointer;
`;
