import React from "react";
 import AdminHeader from "./layout/Header/AdminHeader";
import { Outlet } from "react-router-dom";
const Admin = () => {
  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
};

export default Admin;
