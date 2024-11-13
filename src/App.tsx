import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Singers from "./pages/Singers";
import KaranAujla from "./pages/KaranAujla";
import RanjitBawa from "./pages/RanjitBawa";
import HarbhajanMaan from "./pages/HarbhajanMaan";
import SingerDetails from "./components/SingerDetails";
import SingerPage from "./pages/SingerPage";
import StateManagement from "./pages/concepts/StateManagement";
import Events from "./pages/concepts/Events";
import UseEffectHook from "./pages/concepts/hooks/UseEffectHook";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { Layout } from "./components/Layout";
/**
 * 1. RouterProvider
 * 2. create router using createBrowserRouter
 */

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/karan-aujla",
        element: <KaranAujla />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ranjit-bawa",
        element: <RanjitBawa />,
      },
      {
        path: "/harbhajan-maan",
        element: <HarbhajanMaan />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
