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
import Layout1 from "./components/Layout1";
import Children from "./pages/concepts/Children";
import DataDisplay from "./pages/concepts/Data/DataDisplay";
import DataFetching from "./pages/concepts/Data/DataFetching";
import CustomDataHooks from "./pages/concepts/CustomDataHooks";
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
      {
        path: "/concepts/hooks/UseEffectHook.tsx",
        element: <UseEffectHook />,
      },
      {
        path: "/concepts/Events",
        element: <Events />,
      },
      {
        path: "/concepts/StateManagement",
        element: <StateManagement />,
      },
      {
        path: "/concepts/children",
        element: <Children />,
      },
      {
        path: "/concepts/data-display",
        element: <DataDisplay />,
      },

      {
        path: "/concepts/data-fetching",
        element: <DataFetching />,
      },
      {
        path: "/concepts/custom-data-hooks",
        element: <CustomDataHooks />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
