import { CardComponent } from "../../../../interfaces";
import { Container } from '@mui/material'

export const SectorView = ({ form }: { form: JSX.Element }): JSX.Element => {
  return (
      <Container>
        <CardComponent>{form}</CardComponent>
      </Container>
    )
};
