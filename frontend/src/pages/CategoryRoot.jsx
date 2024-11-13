import React from "react";
import { Outlet } from "react-router-dom";
import CategoryNavigation from "../components/ObjectNavigation/CategoryNavigation";

export default function CategoryRootLayout() {
  return (
    <>
      <CategoryNavigation />
      <Outlet />
    </>
  );
}
