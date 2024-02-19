import React from 'react';
import '../pages/register.css'; 

function LoginForm() {
  return (
    <div className="contenido">
      <div className="credenciales">
        <div className="cuadro">o</div>
        <h1>Iniciar sesión</h1>
        <form>
          <label htmlFor="email">Email*</label><br />
          <input type="email" id="email" name="email" defaultValue="Introduce tu email" required /><br />

          <label htmlFor="password">Contraseña*</label><br />
          <input type="password" id="password" name="password" required /><br />

          <a href="#" className="olvideMP">Olvidé mi contraseña</a><br />

          <input type="submit" value="Iniciar Sesión" className="enviar" />

          <p className="cambiar-password">¿No tienes una cuenta? <a href="#">Regístrate</a></p>
        </form>
      </div>

      <div className="imagen">
        <div className="img-credenciales">
          <h2>Comienza a llevar tus ideas a la realidad.</h2>
          <p className="texto-credenciales">EventsBliss, la pagina ideal para la gestion y reservacion de eventos. Unete ya a nuestra gran comunidad. </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
