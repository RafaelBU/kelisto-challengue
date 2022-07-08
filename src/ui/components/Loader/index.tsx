import * as S from "./styles";

export default function Loader() {
  return (
    <S.LoaderContainer aria-label="loader">
      <S.Dot delay="0s" />
      <S.Dot delay="0.1s" />
      <S.Dot delay="0.2s" />
    </S.LoaderContainer>
  );
}
