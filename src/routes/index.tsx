import { createHashRouter } from "react-router-dom";
import Home from "@/pages/home";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import App from "@/App";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
