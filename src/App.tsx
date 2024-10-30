import React from "react";
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./pages/Users";
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
    element: <Users/>,
  },
  {
    path: '/singers/karan-aujla',
    element: <div>Hello from Karan</div>,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} >
      
    </RouterProvider>
  );
};

export default App;
