import Button from "../Button";
import {
  Container,
  StyledDashboardIcon,
  StyledCardIcon,
  StyledRefreshIcon,
  StyledSetingsIcon,
} from "./styles";

export default function NavBar() {
  return (
    <Container>
      <Button Icon={StyledDashboardIcon} variant="primary" size="small" />
      <Button Icon={StyledCardIcon} variant="secondary" size="small" />
      <Button Icon={StyledRefreshIcon} variant="secondary" size="small" />
      <Button Icon={StyledSetingsIcon} variant="secondary" size="small" />
    </Container>
  );
}
