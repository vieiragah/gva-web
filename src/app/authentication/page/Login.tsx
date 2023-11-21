import { LoginView } from "../view/Login"
import { FormLogin } from "."
export const Login = () => {
  return (
    <LoginView key={0} form={<FormLogin key={1}/>}/>
  )
}