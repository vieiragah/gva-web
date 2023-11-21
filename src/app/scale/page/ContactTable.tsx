import {
  TableBody,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { MockContact } from "../../../mock";
export const ContactTable = () => {
  return (
    <TableContainer sx={{ margin: "80px 0 30px 0" }}>
      <Typography>
        Dúvidas ? Entre em contato direto com a supervisão:
      </Typography>
      <Table sx={{ marginBottom: "20px" }}>
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: "bolder" }}>
              Nome
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bolder" }}>
              Número
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {MockContact.map((items) => (
            <TableRow>
              <TableCell align="center">{items.name}</TableCell>
              <TableCell align="center">
                {items.tel} <WhatsAppIcon fontSize="small" color="success" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
