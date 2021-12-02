import React, {useEffect} from "react";
import { Navigate, Route, useLocation } from "react-router-dom";
import Users from "./Users";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = true;
  const location = useLocation();


  console.log("location", location);

  const cookieValue = document.cookie
    .split("; ")
    .find((el) => el.startsWith("auth0."));

//   console.log("this test", cookieValue);

if (cookieValue) {
    console.log("auth")
} else {
    console.log("not")
}

  return cookieValue ? <Users /> : <Navigate to="/unouth" state={{path: location.pathname}} />;
}

export default ProtectedRoute;
