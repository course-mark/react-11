import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Singers from "./pages/Singers";
import KaranAujla from "./pages/KaranAujla";
import RanjitBawa from "./pages/RanjitBawa";
import HarbhajanMaan from "./pages/HarbhajanMaan";
import SingerDetails from "./components/SingerDetails";
import SingerPage from "./pages/SingerPage";
import StateManagement from "./pages/concepts/StateManagement";
import Events from "./pages/concepts/Events/MouseEvents";
import UseEffectHook from "./pages/concepts/hooks/UseEffectHook";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { Layout } from "./components/Layout";
import Layout1 from "./components/Layout1";
import Children from "./pages/concepts/Children";
import DataDisplay from "./pages/concepts/Data/DataDisplay";
import DataFetching from "./pages/concepts/Data/DataFetching";
import CustomDataHooks from "./pages/concepts/CustomDataHooks";
import Posts from "./pages/Posts";
import KeyboardEvents from "./pages/concepts/Events/KeyboardEvents";
import { useEventListener } from "usehooks-ts";
import UncontrolledComponents from "./pages/concepts/UncontrolledComponents";
import UseRefHook from "./pages/concepts/hooks/UseRefHook";
import LogicalOperators from "./pages/concepts/LogicalOperators";
import PropDrilling from "./pages/concepts/PropDrilling";
import GlobalState from "./pages/concepts/GlobalState";
import AntdPractice from "./pages/AntdPractice";
import AntdButtonsPage from "./pages/concepts/antd/AntdButtonsPage";

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
        path: "/concepts/hooks/use-effect-hook",
        element: <UseEffectHook />,
      },
      {
        path: "/concepts/hooks/use-ref-hook",
        element: <UseRefHook />,
      },
      {
        path: "/concepts/events",
        element: <Events />,
      },
      {
        path: "/concepts/events/keyboard-events",
        element: <KeyboardEvents />,
      },
      {
        path: "/concepts/state-management",
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
      {
        path: "/concepts/uncontrolled-components",
        element: <UncontrolledComponents />,
      },
      {
        path: "/concepts/logical-operators",
        element: <LogicalOperators />,
      },
      {
        path: "/concepts/prop-drilling",
        element: <PropDrilling />,
      },
      {
        path: "/concepts/global-state",
        element: <GlobalState />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/antd-practice",
        element: <AntdPractice />,
      },
      {
        path: "/antd/buttons",
        element: <AntdButtonsPage />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
