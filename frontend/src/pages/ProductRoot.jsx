import React from "react";
import { Outlet } from "react-router-dom";
import ProductNavigation from "../components/ObjectNavigation/ProductNavigation";

export default function ProductRootLayout() {
  return (
    <>
      <ProductNavigation />
      <Outlet />
    </>
  );
}
