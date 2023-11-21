// import { GlobalStyle } from "../shared";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../shared/components";
function App() {
  return (
    <>
      <Outlet />
      {/* <GlobalStyle /> */}
      <Sidebar/>
    </>
  );
}

export default App;
