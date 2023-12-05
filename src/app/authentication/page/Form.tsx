import { TextField, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FormData } from "../../../interfaces";

export const FormLogin = () => {
  const { handleSubmit, register, formState } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post("http://localhost:3000/login", data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/home");
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
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          marginTop: "100px",
        }}
      >
        <Typography variant="h2" color={"lightsteelblue"}>
          G V A
        </Typography>
        <TextField
          variant="outlined"
          label="E-mail"
          type="email"
          fullWidth
          {...register("email", { required: true })}
        />
        <TextField
          variant="outlined"
          label="Senha"
          type="password"
          fullWidth
          {...register("password", { required: true })}
        />
        <Button
          variant="contained"
          type="submit"
          fullWidth
          disabled={!formState.isValid}
        >
          entrar
        </Button>
      </Box>
    </form>
  );
};
