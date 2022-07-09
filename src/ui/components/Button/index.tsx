import { StyledButton } from "./styles";

export default function Button({
  title,
  Icon,
  onClick,
  variant,
  size,
}: {
  title?: string;
  Icon?: React.FunctionComponent;
  onClick?: () => void;
  variant: "primary" | "secondary";
  size: "big" | "small";
}) {
  return (
    <StyledButton onClick={onClick} variant={variant} size={size}>
      {Icon ? (
        <Icon aria-label="button-icon" />
      ) : (
        <span aria-label="button-title">{title}</span>
      )}
    </StyledButton>
  );
}
