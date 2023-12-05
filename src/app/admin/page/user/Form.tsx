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
import { FormData } from "../../../../interfaces";

export const FormCreateUser = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    getValues,
    reset,
  } = useForm<FormData>();

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const onSubmit = async (data: FormData) => {
    try {
      if (data.password !== data.confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: "As senhas não coincidem.",
        });
        return;
      }

      const response = await axios.post("http://localhost:3000/users", data);

      if (response.status === 200) {
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
      toast.error(error.response.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      console.log(error);
    } finally {
      reset();
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
        <TextField
          label="Nome"
          variant="outlined"
          {...register("name", { required: true })}
        />
        <TextField
          label="E-mail"
          type="email"
          variant="outlined"
          {...register("email", { required: true })}
        />
        <TextField
          label="Senha"
          type="password"
          variant="outlined"
          {...register("password", {
            required: true,
            minLength: {
              value: 6,
              message: "A senha deve conter pelo menos 6 caracteres",
            },
          })}
        />
        {errors.password && (
          <Typography color={"red"}>{errors.password.message}</Typography>
        )}
        <TextField
          label="Confirme a senha"
          type="password"
          variant="outlined"
          {...register("confirmPassword", {
            required: true,
            validate: (value) =>
              value === getValues("password") || "As senhas não coincidem.",
          })}
        />
        {errors.confirmPassword && (
          <Typography color={"red"}>
            {errors.confirmPassword.message}
          </Typography>
        )}

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
