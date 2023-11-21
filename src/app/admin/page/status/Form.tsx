import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
  Box,
  SelectChangeEvent,
  Button,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { MockSectorName } from "../../../../mock";

export const FormStatus = () => {
  const [selectedSector, setSelectedSector] = useState("");
  const [alignment, setAlignment] = useState<string[]>([]);

  const handleSectorChange = (event: SelectChangeEvent<string>) => {
    setSelectedSector(event.target.value);
  };
  const handleChange = (newAlignment: string, index: number) => {
    setAlignment((prevAlignment) => {
      const updatedAlignment = [...prevAlignment];
      updatedAlignment[index] = newAlignment;
      return updatedAlignment;
    });
  };

  return (
    <Box gap={"100px"}>
      <Typography variant="h4" margin={"20px auto"}>
        Nome do Setor
      </Typography>
      <FormControl fullWidth>
        <InputLabel>Selecione um setor</InputLabel>
        <Select
          label="Selecione um setor"
          value={selectedSector}
          onChange={handleSectorChange}
        >
          {MockSectorName.map((sector) => (
            <MenuItem key={sector._id} value={sector._id}>
              {sector.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {MockSectorName.map((sector) => (
        <React.Fragment key={sector._id}>
          {selectedSector === sector._id && (
            <>
              {[...Array(sector.quantity)].map((_, index) => (
                <Box key={index}>
                  <Typography
                    variant="h5"
                    margin={"10px auto"}
                    textAlign={"center"}
                  >
                    {`Leito ${index + 1}`}
                  </Typography>
                  <ToggleButtonGroup
                    sx={{ display: "flex", justifyContent: "center" }}
                    color="primary"
                    value={alignment[index] || "stable"}
                    exclusive
                    onChange={(_, newAlignment) =>
                      handleChange(newAlignment, index)
                    }
                    aria-label={`Platform ${index}`}
                  >
                    <ToggleButton value="stable">Estável</ToggleButton>
                    <ToggleButton value="unstable">Instável</ToggleButton>
                    <ToggleButton value="critical">Crítico</ToggleButton>
                    <ToggleButton value="free">Livre</ToggleButton>
                  </ToggleButtonGroup>
                  <hr />
                </Box>
              ))}
            </>
          )}
        </React.Fragment>
      ))}
      {selectedSector.length > 0 ? (
        <TextField
          type="number"
          label="Quantidade ideal de técnicos"
          variant="outlined"
          fullWidth
        />
      ) : null}
      <Box display={"flex"} justifyContent={"space-between"} margin={"30px 0"}>
        <Button variant="outlined">VOLTAR</Button>
        <Button variant="contained">SALVAR</Button>
      </Box>
    </Box>
  );
};
