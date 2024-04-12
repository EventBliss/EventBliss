import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { useEffect } from "react";

export const ProtectedRoute = ({ children, pathAdmin, pathUser }) => {
    const navigate = useNavigate();
    const { isSignedIn, user } = useUser();

    useEffect(() => {
        // Si el usuario está autenticado y se ha cargado su información
        if (isSignedIn && user) {
            // Verificar el rol del usuario y redirigir en consecuencia
            if (user.organizationMemberships && user.organizationMemberships.length > 0) {
                const userRole = user.organizationMemberships[0].role;
                if (userRole === 'org:admin') {
                    navigate(pathAdmin); // Redirigir al componente de usuario normal
                }
            } else {
                const userRole = 'user'
                console.log(userRole)
                navigate(pathUser)
            }
        }


    }, [isSignedIn, user, navigate, pathAdmin, pathUser]);

    if (!isSignedIn) {
        navigate('/Login');
        return null;
    }
    
    return children;
};
