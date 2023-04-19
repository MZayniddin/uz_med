import { createBrowserRouter } from "react-router-dom";

// PAGES
import App from "../App";
import Home from "../pages/Home";
import Management from "../pages/Management";
import Training from "../pages/Training";
import React from "react";
import Development from "../pages/Development";

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
            {
                path: "training",
                element: <Training />,
            },
            {
                path: "development",
                element: <Development />,
            },
        ],
    },
]);

export default root;
