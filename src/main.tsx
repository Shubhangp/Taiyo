import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Error from "./components/Error";
import ChartAndMap from "./components/ChartAndMap/ChartAndMap";
import Contact from "./components/Contact/Contact";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Contact />
            },
            {
                path: "/chart&map",
                element: <ChartAndMap />
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(<RouterProvider router={appRouter} />);