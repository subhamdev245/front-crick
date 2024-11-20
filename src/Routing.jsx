import { createBrowserRouter, Router } from "react-router-dom";
import App from "./App";
import  EccomHome  from "./ component/eccomview/EccomHome"
import Login from "./ component/comman/Login";
import Register from "./ component/comman/Register";
import ProductPage from "./ component/comman/ProductPage";
import Filter from "./ component/comman/ui/Filter";

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
            },
            {
                path : "/product/:productId",
                element : <ProductPage />
            },
            {
                path : "/products",
                element : <Filter />

            }
        ]
    }
])

export default router




