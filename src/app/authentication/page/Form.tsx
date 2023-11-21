import { TextField, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const FormLogin = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        marginTop: "100px",
      }}
    >
      <Typography variant="h2">G V A</Typography>
      <TextField variant="outlined" label="E-mail" fullWidth />
      <TextField variant="outlined" label="Senha" type="password" fullWidth />
      <Link to="/home" style={{ width: "100%" }}>
        <Button variant="contained" fullWidth>
          entrar
        </Button>
      </Link>
    </Box>
  );
};
