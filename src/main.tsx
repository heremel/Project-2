import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router";
// import { countries } from "./databases/countries.ts";
// import { weathers } from "./databases/weather.ts";
import ListOfItems from "./components/ListOfItems.tsx";
import About from "./components/About.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/search",
        element: <ListOfItems />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
