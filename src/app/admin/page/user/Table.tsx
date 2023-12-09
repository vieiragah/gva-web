import {
    TableBody,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
  } from "@mui/material";
//import { HttpClient } from "../../../../shared";
  //import axios from "axios";
export const TableUser = () => {


  return (
    <TableContainer sx={{ margin: "80px 0 30px 0" }}>
      <Table sx={{ marginBottom: "20px" }}>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: "bolder" }}>
              Nome
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bolder" }}>
              Setor
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell align="center">sdafjn</TableCell>
              <TableCell align="center">
                asdasdas
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
