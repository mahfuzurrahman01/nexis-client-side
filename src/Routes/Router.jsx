import { createBrowserRouter } from "react-router-dom";
import Attend from "../Components/Attend";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Main from "../Layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/test',
                element: <Attend></Attend>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <Register></Register>
    }
])