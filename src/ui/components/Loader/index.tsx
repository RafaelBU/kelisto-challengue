import * as S from "./styles";

export default function Loader() {
  return (
    <S.LoaderContainer aria-label="loader">
      <S.Dot delay="0s" aria-label="dot-1" />
      <S.Dot delay="0.1s" aria-label="dot-2" />
      <S.Dot delay="0.2s" aria-label="dot-3" />
    </S.LoaderContainer>
  );
}
