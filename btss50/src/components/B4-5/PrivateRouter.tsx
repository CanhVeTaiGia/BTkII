import React, { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function PrivateRouter() {
  let location = useLocation();
  const [islogin, setIslogin] = useState<boolean | any >(() => {
    return location? location : false
  });
  
  return <>{islogin ? <Outlet /> : <Navigate to="/login" />}</>;
}
