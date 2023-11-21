import { Outlet } from "react-router-dom";
import { Sidebar } from "../shared/components";
import { Box } from "@mui/material";
function App() {
  return (
    <Box margin='10px 0 70px 0'>
      <Outlet />
      <Sidebar/>
    </Box>
  );
}

export default App;
