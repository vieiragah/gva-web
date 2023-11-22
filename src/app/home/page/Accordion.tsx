import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  Typography,
  AccordionSummary,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Button,
  Box,
  TextField,
  Pagination,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMemo, useState } from "react";
import { MockAccordion } from "../../../mock";
import { useSearchParams } from "react-router-dom";
export const Accordions = () => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filtererdSector = useMemo(() => {
    return MockAccordion.filter((item) => {
      const searchString = `${item.setor}`.toLowerCase();
      return searchString.includes(search.toLowerCase());
    });
  }, [search]);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const colors = (funcionario: number, recomendado: number) => {
    switch (true) {
      case funcionario < recomendado:
        return { color: "red" };
      case funcionario === recomendado:
        return { color: "gray" };
      case funcionario > recomendado:
        return { color: "lightGreen" };
      default:
        return { color: "black" };
    }
  };
  
  //     Paginação
  const itemsPerPage = 4;
  const calculatePageRange = () => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return { start, end };
  };

  const page = useMemo(() => {
    return Number(searchParams.get("page") || "1");
  }, [searchParams]);

  return (
    <Stack spacing={2}>
      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        <TextField
          label="Buscar"
          variant="outlined"
          placeholder="Nome do setor"
          onChange={handleSearch}
        />

        {filtererdSector.length > 0
          ? filtererdSector
              .slice(calculatePageRange().start, calculatePageRange().end)
              .map((item) => (
                <Accordion
                  expanded={expanded === item._id}
                  onChange={handleChange(item._id)}
                  key={item._id}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      {item.setor}
                    </Typography>
                    <Typography
                      sx={colors(item.funcionarios, item.recomendado)}
                    >
                      status do setor
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ padding: "8px 4px 16px" }}>
                    <TableContainer>
                      <Table sx={{ marginBottom: "20px" }}>
                        <TableHead>
                          <TableRow>
                            <TableCell>Pacientes</TableCell>
                            <TableCell>Funcionários</TableCell>
                            <TableCell>Recomendado</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell
                              align="center"
                              sx={{ fontWeight: "bolder" }}
                            >
                              {item.pacientes}
                            </TableCell>
                            <TableCell
                              align="center"
                              sx={{ fontWeight: "bolder" }}
                            >
                              {item.funcionarios}
                            </TableCell>
                            <TableCell
                              align="center"
                              sx={{ fontWeight: "bolder" }}
                            >
                              {item.recomendado}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Box
                      display={"flex"}
                      justifyContent={"flex-end"}
                      marginRight={"10px"}
                    >
                      <Button variant="contained" size="small">
                        VER MAIS
                      </Button>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              ))
          : null}
        {filtererdSector.length > 4 ? (
          <Box display='flex' justifyContent='center'>
            <Pagination
              page={page}
              count={Math.ceil(filtererdSector.length / itemsPerPage)}
              shape="rounded"
              onChange={(_, newPage) =>
                setSearchParams({ page: newPage.toString() }, { replace: true })
              }
            />
          </Box>
        ) : null}
      </Box>
    </Stack>
  );
};
