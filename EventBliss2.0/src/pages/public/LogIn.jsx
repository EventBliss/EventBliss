import { SignIn } from "@clerk/clerk-react";


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
    <div className="relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ 
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/03/27/18/53/drinks-1283608_1280.jpg")',
      }}></div>
      <div className="max-w-screen-lg mx-auto py-20 md:py-20 relative z-10">
        <div className="flex flex-row justify-center">
          <div>
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}
