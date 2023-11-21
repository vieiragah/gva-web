import Container from "@mui/material/Container";
import { CardComponent } from "../../../interfaces";
export const HomeView = ({
  carousel,
  accordion,
}: {
  carousel: JSX.Element;
  accordion: JSX.Element;
}): JSX.Element => {
  return (
    <Container>
      <CardComponent>{carousel}</CardComponent>
      <CardComponent>{accordion}</CardComponent>
    </Container>
  );
};
