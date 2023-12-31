import { TextField, Box, Button, Typography } from "@mui/material";
import AsyncSelect from "react-select";
import { MockUser } from "../../../../mock";
import { useNavigate } from "react-router";

export const FormCreateSector = () => {
  const options = MockUser?.map((item) => ({
    label: item.name,
    value: item._id,
  }));
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography variant="h4" margin={"20px auto"}>
        Criar Setor
      </Typography>
      <TextField label="Nome do setor" variant="outlined" />
      <TextField
        label="Quantidade de leitos"
        type="number"
        variant="outlined"
      />
      <AsyncSelect
        closeMenuOnSelect={false}
        placeholder="Acrescentar funcionários"
        isMulti
        options={options}
      />
      <Button variant="contained">CRIAR</Button>
      <Button
        variant="outlined"
        sx={{ marginTop: "20px" }}
        onClick={handleGoBack}
      >
        VOLTAR
      </Button>
    </Box>
  );
};
