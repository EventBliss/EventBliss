import { useNavigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import { useEffect } from "react";

export const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { isSignedIn, user } = useUser();

    useEffect(() => {
        if (isSignedIn && user) {
            if (user.organizationMemberships && user.organizationMemberships.length > 0) {
                const userRole = user.organizationMemberships[0].role;
                if (userRole === 'org:member') {
                    navigate('/user'); 
                } else if (userRole === 'org:admin') {
                    navigate('/admin'); 
                }
            } else {
                // Si el usuario está autenticado pero no tiene membresías en la organización, redirigir a una página por defecto
                navigate('/'); // Puedes cambiar esto a la ruta que desees
            }
        }
    }, [isSignedIn, user, navigate]);
    
    return children;
};
