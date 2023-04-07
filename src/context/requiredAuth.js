import React, { Children, useContext } from "react";
import useAuth from "../hooks/useAuth";
import AuthContext from "./authprovider";
import { Outlet, useLocation, Navigate,  } from "react-router-dom";
const role=[
    {
        name: 'admin',
        label: 'Admin',
        icon: 'fa fa-cog',
        },
        {
            name: 'user',
            label: 'User',
            icon: 'fa fa-user',
            },
            {
                name: 'guest',
                label: 'Guest',
                icon: 'fa fa-user',
                },
                {
                    name: 'anonymous',
                    label: 'Anonymous',
                    icon: 'fa fa-user',
                    }
]


const Auth= ({role})=>{
    const  auth= useContext(AuthContext);
    const location=useLocation();
    return role.find((role) => auth.role.includes(role)) ? (
        <Outlet />
      ) : auth?.name ? (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
      ) : (
        <Navigate to="/register" state={{ from: location }} replace />
      );
}
export default Auth;
