import React from "react";
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Singers from "./pages/Singers";
import KaranAujla from "./pages/KaranAujla";
import RanjitBawa from "./pages/RanjitBawa";
import HarbhajanMaan from "./pages/HarbhajanMaan";
import SingerDetails from "./components/SingerDetails";
import SingerPage from "./pages/SingerPage";
import StateManagement from "./pages/concepts/StateManagement";
/**
 * 1. RouterProvider
 * 2. create router using createBrowserRouter
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world</div>,
  },
  {
    path:'/singers',
    element: <Singers/>,
  },
  {
    // path variables / path parameters
    // /singers/karan-aujla -> {singerName: 'karan-aujla'} -> using useParams()
    // /singers/ranjit-bawa -> {singerName: 'ranjit-bawa'}
    // /singers/harbhajan-maan -> {singerName: 'harbhajan-maan'}
    path: '/singers/:singerId',
    element: <SingerPage/>,
  },
  {
    path: '/concepts/state-management',
    element: <StateManagement/>,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} >
      
    </RouterProvider>
  );
};

export default App;
