import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import SearchTransaction from "./Pages/Transaction/SearchTransaction.jsx";
import DebtAnalysis from "./Pages/DebtAnalysis/DebtAnalysis.jsx";
import OrderReconcile from "./Pages/OrderReconcile/OrderReconcile.jsx";
import Report from "./Pages/Report/Report.jsx";
import Login from "./Pages/Login/Login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/searchTransaction", element: <SearchTransaction /> },
      { path: "/DebtAnalysis", element: <DebtAnalysis /> },
      { path: "/OrderReconcile", element: <OrderReconcile /> },
      { path: "/Report", element: <SearchTransaction /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
