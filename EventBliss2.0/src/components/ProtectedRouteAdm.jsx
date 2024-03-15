
// import { useAuth } from '@clerk/clerk-react';
// import { useNavigate } from 'react-router-dom';
// import { useUser } from '@clerk/clerk-react';


// export const ProtectedRouteAdm = ({ children }) => {

//     const navigate = useNavigate();
//     const { isSignedIn } = useUser();
//     const admin = false


//     const { has } = useAuth();
//         if(has({role: "org:admin"})){
//             console.log("tiene rol")
//         return null;

//     }
//     if (!isSignedIn) {
//         navigate('/SignUpClient'); // Redirige a /SignUpClient si el usuario no está autenticado
//         return null; // Devuelve null para evitar que se renderice el componente protegido
//     }
    
//     return children
// }

// export default ProtectedRouteAdm;
