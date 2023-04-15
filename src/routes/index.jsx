import { createBrowserRouter } from "react-router-dom";

// PAGES
import App from "../App";
import Home from "../pages/Home";
import Management from "../pages/Management";

const root = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "management",
                element: <Management />,
            },
        ],
    },
]);

export default root;
