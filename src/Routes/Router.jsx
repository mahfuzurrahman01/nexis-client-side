import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
])