import { Container } from "@mui/material";
import { CardComponent } from "../../../interfaces";

export const LoginView = ({ form }: { form: JSX.Element }): JSX.Element => {
  return (
    <Container>
      <CardComponent>{form}</CardComponent>
    </Container>
  );
};
