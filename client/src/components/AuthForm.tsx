import { useState } from "react"
import authBg from "/assets/imgs/authBg1.jpg"
import Login from "./Login"
import Register from "./Register"
import { Auth } from "../../config/types"

const AuthForm = () => {
    const [auth, setAuth] = useState<Auth>(Auth.Login)
    const switchAuth = () => {
        setAuth(auth == Auth.Login ? Auth.Register : Auth.Login)
    }
    return (
        <div className="flex justify-center items-center h-screen w-full" style={{ background: `url(${authBg}) no-repeat` }}>
            {auth == Auth.Login ? <Login switchAuth={switchAuth} /> : <Register switchAuth={switchAuth} />}



        </div>
    )
}

export default AuthForm
