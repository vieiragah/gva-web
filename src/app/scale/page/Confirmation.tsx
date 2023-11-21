import {
  Box,
  Typography,
  Button,
  Modal,
  Fade,
  Backdrop,
  TextareaAutosize,
} from "@mui/material";
import { useState } from "react";
import { format } from "date-fns";
import { ContactTable } from ".";
export const Confirmation = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const currentDate = new Date();
  return (
    <Box sx={{marginBottom:'20px'}}>
      <Typography variant="h4" textAlign={'center'}>Nome do setor</Typography>
      <Typography variant="h5" textAlign={"center"} sx={{ margin: "30px 0" }}>
        Confirmar presença hoje dia:
        <br />
        <strong>{format(currentDate, "dd/MM/yyyy")}</strong>
      </Typography>
      <Button variant="contained" fullWidth sx={{ margin: "60px 0" }}>
        CONFIRMAR
      </Button>
      <Button
        variant="outlined"
        color="error"
        onClick={handleOpen}
        sx={{ display: "flex", margin: "0 auto" }}
      >
        registar falta
      </Button>
      <ContactTable/>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Descreva abaixo o motivo da ausência:
            </Typography>
            <TextareaAutosize
              style={{
                width: "100%",
                height: "123px",
                backgroundColor: "#cee0f1",
                border: "none",
                borderRadius: "5px",
                resize: "none",
              }}
            />
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              margin={"15px 0 0 0"}
            >
              <Button onClick={handleClose} variant="outlined" color="error">
                cancelar
              </Button>
              <Button variant="contained">salvar</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <Button variant="outlined">voltar</Button>
    </Box>
  );
};
