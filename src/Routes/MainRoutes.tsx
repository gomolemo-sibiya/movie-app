import { useRoutes } from "react-router-dom";
import { Home } from "../Pages/Home";

export const MainRoutes = () => {
    return useRoutes([
        {path: "/", element: <Home />},
    ])
}