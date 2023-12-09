import { FormCreateUser, TableUser } from ".";
import { UserView } from "../..";

export const UserPage = () => {
  return (
    <UserView
      key={0}
      form={<FormCreateUser key={1} />}
      table={<TableUser key={2} />}
    />
  );
};
