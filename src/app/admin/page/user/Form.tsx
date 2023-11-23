import { TextField, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";
export const FormCreateUser = () => {
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography variant="h4" margin={"20px auto"}>
        Criar usuário
      </Typography>
      <TextField label="Nome" variant="outlined" />
      <TextField label="E-mail" type="email" variant="outlined" />
      <TextField label="Senha" type="password" variant="outlined" />
      <TextField label="Confirme a senha" type="password" variant="outlined" />
      <Button variant="contained">CRIAR</Button>
      <Button variant="outlined" sx={{ marginTop: "20px" }} onClick={handleGoBack}>
        VOLTAR
      </Button>
    </Box>
  );
};
