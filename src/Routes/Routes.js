import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Attendance from "../pages/Attendance";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/attendance',
            element: <Attendance />
        }
    ]
}])