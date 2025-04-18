import "./index.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import ListOfItems from "./components/ListOfItems.tsx";
import About from "./components/About.tsx";
import DetailedItem from "./components/DetailedItem.tsx";

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
      {
        path: "/details/:countryName",
        element: <DetailedItem />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
