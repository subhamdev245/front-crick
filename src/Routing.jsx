import { createBrowserRouter, Router } from "react-router-dom";
import App from "./App";
import  EccomHome  from "./ component/eccomview/EccomHome"
import Login from "./ component/comman/Login";
import Register from "./ component/comman/Register";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {
                path : "/",
                element : <EccomHome />
            },
            {
                path : "/login",
                element : <Login />
            },
            {
                path : "/register",
                element : <Register />
            }
        ]
    }
])

export default router




