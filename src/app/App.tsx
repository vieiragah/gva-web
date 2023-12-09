import { Outlet } from "react-router-dom";
import { Sidebar } from "../shared/components";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "../shared/contexts/authentication";
function App() {
  const { pathname } = useLocation();
  return (
    <AuthProvider>
      <Box margin="10px 0 70px 0">
        <Outlet />
        {pathname != "/" ? <Sidebar /> : null}
      </Box>
    </AuthProvider>
  );
}

export default App;
