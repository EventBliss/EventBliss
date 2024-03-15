import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';


const ProtectedRoute = ({ children  }) => {
    const navigate = useNavigate();
    const { isSignedIn } = useUser();

    if (!isSignedIn) {
        navigate('/SignUpClient'); // Redirige a /SignUpClient si el usuario no está autenticado
        return null; // Devuelve null para evitar que se renderice el componente protegido
    } 

    return children
};

export default ProtectedRoute;