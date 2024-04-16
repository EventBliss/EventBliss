import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useUser } from "@clerk/clerk-react"; // Suponiendo que tienes un hook useUser para obtener el estado de autenticación

export function ProtectedRoute({ role, children, redirectTo, redirect }) {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  if (!isSignedIn && redirect) {
    navigate('/Login'); 
  }

  if (isSignedIn && !role) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />; 
}


// eslint-disable-next-line react/prop-types
export function ProtectedRoutePublic({ role, children }) {
  if (role == "admin") {
    return <Navigate to={"/admin/Dashboard"} />;
  } else if (role == "client") {
    return <Navigate to={"Organizers"} />;
  }

  return children ? children : <Outlet />;
}
