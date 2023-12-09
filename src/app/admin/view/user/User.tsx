import Container from "@mui/material/Container";
import { CardComponent } from "../../../../interfaces";

export const UserView = ({ form, table }: { form: JSX.Element, table: JSX.Element }): JSX.Element => {
  return (
    <Container>
      <CardComponent>{form}</CardComponent>
      <CardComponent>{table}</CardComponent>
    </Container>
  );
};
