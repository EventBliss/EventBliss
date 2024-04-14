import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useUser } from "@clerk/clerk-react"; // Suponiendo que tienes un hook useUser para obtener el estado de autenticación

// eslint-disable-next-line react/prop-types
export function ProtectedRoute({ role, children, redirectTo, redirect }) {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  if (!isSignedIn && redirect) {
    navigate('/Login');
    return null; // Retornamos null para evitar renderizar otros componentes mientras se redirecciona
  }

  if (isSignedIn && !role) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />; // Renderizamos los componentes hijos o un Outlet si no hay hijos
}


// eslint-disable-next-line react/prop-types
export function ProtectedRoutePublic({ role, children }) {
  if (role == "admin") {
    return <Navigate to={"/admin/Dashboard"} />;
  } else if (role == "client") {
    return <Navigate to={"Organizer"} />;
  }

  return children ? children : <Outlet />;
}
