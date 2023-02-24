import logo from '../../assets/img/logo.png'

export const LogIn = () => {
  return (
    <div className="log-in">
        <div data-aos="fade-left" data-aos-duration="1000"  className="log-in-form">
            <h2>Bienvenido a</h2>
            <section>
                <img src={logo} alt="logo" />
                <p>Face-Job</p>
            </section>
            <p>Unete a nosotros, crea tu perfil y sube publicaciones</p>
            <form action="">
                <input placeholder='Correo Electronico' type="email" id="email" />
                <input placeholder='Contraseña' type="password" id="password" />
                <button>Iniciar Sesion</button>
            </form>
            <a href='/signup'>¿No tienes cuenta? registrate</a>
              <a href="/">volver</a>
        </div>
    </div>
  )
}
