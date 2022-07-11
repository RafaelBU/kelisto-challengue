import { StyledError } from "./styles";

export default function ErrorBlock({ message }: { message: string }) {
  return (
    <StyledError>
      <p>{message}</p>
    </StyledError>
  );
}
