import {  createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../Home/Home";
import Products from "../products/Products";
import Dashboard from "../Dashboard/Dashboard";
import ProductDetails from "../products/ProductDetails";
import Profile from "../Dashboard/Profile";
import DashboardLayout from "../../DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/product",
        element: <Products></Products>,
        loader: () => fetch("https://dummyjson.com/products"),
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.id}`),
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
          },
          {
            path: "/dashboard/profile",
            element: <Profile></Profile>,
          },
        ],
      },
    ],
  },
]);

export default router;
