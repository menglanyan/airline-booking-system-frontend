import { Navigate, useLocation } from "react-router-dom";
import ApiService from "./ApiService";

export const RouteGuard = ({element: Component, allowedRoles}) => {

  const location = useLocation();

  let hasRequiredRole = false;

  if (!allowedRoles || allowedRoles.length === 0) {
    // Deny access if no roles are explicitly allowed
    hasRequiredRole = false;
  } else {
    hasRequiredRole= allowedRoles.some(role => {

      //Check if the user has the mactching roles needed to access the route
      if (role === 'ADMIN') {
        return ApiService.isAdmin();
      } else if (role === 'PILOT') {
        return ApiService.isPilot();
      } else if (role === 'CUSTOMER') {
        return ApiService.isCustomer();
      }
      return false;
    });
  }

  // If the user has the required role, render the component
  if (hasRequiredRole) {
    return Component;
  } else {
    // If not authorized, redirect to the login page
    return <Navigate to="/login" replace state={{from: location}}/>
  }
}