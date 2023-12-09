const scale = "/scale";
const admin = "/admin";
const home = "/home";

const AUTH = {
  LOGIN: "/",
};
const HOME = {
  HOME: `${home}`,
};
const SCALE = {
  PRESENCE: `${scale}/presence-page`,
};

const ADMIN = {
  USERS: `${admin}/users`,
  CREATE_USER: `${admin}/adm-create-user`,
  CREATE_SECTOR: `${admin}/adm-create-sector`,
  CREATE_STATUS: `${admin}/adm-create-status`,
};

export const Routes = {
  home: HOME,
  scale: SCALE,
  admin: ADMIN,
  auth: AUTH,
};
