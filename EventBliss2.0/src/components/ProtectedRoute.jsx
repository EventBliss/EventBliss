import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { useEffect } from "react";

export const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { isSignedIn, user } = useUser();

    useEffect(() => {
        // Si el usuario está autenticado y se ha cargado su información
        if (isSignedIn && user) {
            // Verificar el rol del usuario y redirigir en consecuencia
            if (user.organizationMemberships && user.organizationMemberships.length > 0) {
                const userRole = user.organizationMemberships[0].role;
                if (userRole === 'org:member') {
                    navigate('/user'); // Redirigir al componente de usuario normal
                } else if (userRole === 'org:admin') {
                    navigate('/admin'); // Redirigir al componente de administrador
                }
            }
        }
    }, [isSignedIn, user, navigate]);

    // Si el usuario no está autenticado, redirigir al inicio de sesión
    if (!isSignedIn) {
        navigate('/SignUpClient');
        return null;
    }


    // Si el usuario está autenticado pero aún no se ha determinado su rol, no renderizar nada
    return children;
};
