import { SignIn, SignedIn } from "@clerk/clerk-react";


export function LogIn() {


  // useEffect(() => {
  //   if (user) {
  //     const isAdmin = user.role === 'admin';
  //     // Redirigir al dashboard correspondiente según el rol del usuario
  //     if (isAdmin) {
  //       window.location.href = '/AdmDashboard'; // Cambia la URL según tu configuración
  //     } else {
  //       window.location.href = '/Dashboard'; // Cambia la URL según tu configuración
  //     }
  //   }
  // }, [user]);

  return (
    <div className="bg-[#E6E5E4] ">
      <div className="max-w-screen-lg mx-auto py-28 ">
        <div className="grid grid-cols-1 md:grid-cols-12 border rounded-r-md">
          {/* Renderizar el formulario de inicio de sesión */}
          <SignIn />

          {/* Si el usuario está autenticado */}
          <SignedIn>
            {/* Si el usuario aún no ha sido redirigido, mostrar un mensaje de carga */}
            <div>Cargando...</div>
          </SignedIn>
        </div>
      </div>
    </div>
  )
}
