import { createBrowserRouter, Router } from "react-router-dom";
import App from "./App";


const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
            {
                path : "/",
                element : <HomeProduct />

            }
        ]
    }
])






