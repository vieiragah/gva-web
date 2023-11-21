import { FormCreateUser } from "."
import { UserView } from "../.."

export const UserPage = () => {
  return (
    <UserView key={0} form={<FormCreateUser key={1}/>}/>
  )
}
