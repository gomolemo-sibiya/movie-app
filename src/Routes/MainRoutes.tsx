import { useRoutes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Movies } from "../Pages/Movies";
import { SearchPage } from "../Pages/SearchPage";

export const MainRoutes = () => {
    return useRoutes([
        { path: "/", element: <Home />},
        { path: "/movie/:slug", element: <Movies /> },
        { path: "/movie/search=:slug", element: <SearchPage />  },
    ])
}