import {
  TextField,
  Box,
  Button,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
export const FormCreateUser = () => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const response = await axios.post("http://localhost:3000/users", data);
      const { status } = response;

      if (status === 200) {
        toast.success("Usuário criado com sucesso", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography variant="h4" margin={"20px auto"}>
        Criar usuário
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <TextField label="Nome" variant="outlined" {...register("name")} />
        <TextField
          label="E-mail"
          type="email"
          variant="outlined"
          {...register("email")}
        />
        <TextField
          label="Senha"
          type="password"
          variant="outlined"
          {...register("password")}
        />
        <TextField
          label="Confirme a senha"
          type="password"
          variant="outlined"
        />
        <RadioGroup
          row
          sx={{ justifyContent: "center" }}
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value={"technician"}
            {...register("office")}
            control={<Radio />}
            label="Técn"
          />
          <FormControlLabel
            value={"nurse"}
            {...register("office")}
            control={<Radio />}
            label="Enferº"
          />
          <FormControlLabel
            value={"supervisor"}
            {...register("office")}
            control={<Radio />}
            label="Superv"
          />
        </RadioGroup>
        <Button variant="contained" type="submit">
          CRIAR
        </Button>
      </form>
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
