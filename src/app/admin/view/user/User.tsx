import Container from "@mui/material/Container";
import { CardComponent } from "../../../../interfaces";

export const UserView = ({ form }: { form: JSX.Element }): JSX.Element => {
  return (
    <Container>
      <CardComponent>{form}</CardComponent>
    </Container>
  );
};
