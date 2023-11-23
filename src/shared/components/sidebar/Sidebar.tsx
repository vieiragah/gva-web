import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HealingIcon from "@mui/icons-material/Healing";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import VerifiedIcon from '@mui/icons-material/Verified';

export const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <Tabs
      defaultValue={1}
      style={{ position: "fixed", bottom: "-10px", left: "3%", right: "3%" }}
    >
      <TabsList>
        <Link to="/home">
          <Tab value={1} isActive={pathname === '/home'}>
            <HomeIcon />
          </Tab>
        </Link>
        <Link to="/adm-create-user">
          <Tab value={2} isActive={pathname === '/adm-create-user'}>
            <PersonAddIcon />
          </Tab>
        </Link>
        <Link to="/adm-create-sector">
          <Tab value={3} isActive={pathname === '/adm-create-sector'}>
            <HealingIcon />
          </Tab>
        </Link>
        <Link to="/adm-create-status">
          <Tab value={4} isActive={pathname === '/adm-create-status'}>
            <AssignmentTurnedInIcon />
          </Tab>
        </Link>
        <Link to="/presence-page">
          <Tab value={5} isActive={pathname === '/presence-page'}>
            <VerifiedIcon />
          </Tab>
        </Link>
      </TabsList>
    </Tabs>
  );
};
const blue = {
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};

const Tab = styled(BaseTab)`
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  line-height: 1.5;
  padding: 8px 12px;
  margin: 6px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  ${(props) => props.isActive && `
    background-color: #fff;
    color: ${blue[600]};
  `}

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    ${(props) =>
      props.isActive &&
      `
    color: #fff;
    outline: 3px solid ${blue[200]}`}
    &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]}
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
    min-width: 100%;
    background-color: ${blue[500]};
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 6px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0, 0.4)" : "rgba(0,0,0, 0.2)"
    };
    `
);
