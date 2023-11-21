import { Container } from "@mui/material";
import { CardComponent } from "../../../interfaces";

export const PresenceView = ({
  presence,
}: {
  presence: JSX.Element;
}): JSX.Element => {
  return (
    <Container>
      <CardComponent>{presence}</CardComponent>
    </Container>
  );
};
