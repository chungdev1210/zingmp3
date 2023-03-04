import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../Pages/Auth/authSlice";

export default function AuthMiddleware() {
   const auth = useSelector(authSelector)
   const { isAuth, isLoading } = auth;
   if (isLoading) {
      return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
   } else {
      return <p>Loading...</p>
   }
}
