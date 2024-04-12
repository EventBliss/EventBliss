import { useNavigate ,Navigate, Outlet } from "react-router-dom";
import {useUser} from "@clerk/clerk-react"


// eslint-disable-next-line react/prop-types
export function ProtectedRoute({ role, children, redirectTo }) {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  if (isSignedIn) {
    if(!role){
      return <Navigate to={redirectTo}/>
    }
  }else{
    return navigate("/Login");
  }
  

  return children ? children : <Outlet />;
}