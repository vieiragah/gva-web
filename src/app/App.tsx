import { Outlet } from "react-router-dom";
import { Sidebar } from "../shared/components";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
function App() {
  const { pathname } = useLocation()
  return (
    <Box margin='10px 0 70px 0'>
      <Outlet />
      {pathname != '/' ? <Sidebar/> : null}
    </Box>
  );
}

export default App;
