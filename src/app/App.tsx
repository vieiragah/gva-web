import { Outlet } from "react-router-dom";
import { Sidebar } from "../shared/components";
import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <Box margin="10px 0 70px 0">
      <Outlet />
      {pathname != "/" ? <Sidebar /> : null}
    </Box>
  );
}

export default App;
