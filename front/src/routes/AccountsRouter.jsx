import { useParams } from "react-router-dom"
import { Login } from "../components/forms/LoginForm"
import { Register } from "../components/forms/RegisterForm"


export const LoginOrRegister = () => {
    const { login_or_register } = useParams();

    return login_or_register === "login"? <Login />:
        login_or_register === "register"? <Register />: <></>
}