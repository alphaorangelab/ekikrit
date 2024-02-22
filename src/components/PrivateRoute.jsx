// PrivateRoute.js
import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ element }) => {
    console.log(JSON.parse(localStorage.getItem("userData")), "JSON.parse");
    // Implement your authentication logic here
    const isAuthenticated = () =>
        JSON.parse(localStorage.getItem("userData")) !== null;

    console.log(isAuthenticated(), "is authenticated");

    return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
