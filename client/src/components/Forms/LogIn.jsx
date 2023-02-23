import logo from '../../assets/img/logo.png'

export const LogIn = () => {
  return (
    <div className="log-in">
        <div className="log-in-form">
            <h2>Bienvenido a</h2>
            <section>
                <img src={logo} alt="logo" />
                <p>Face-Job</p>
            </section>
            <p>Unete a nosotros, crea tu perfil y sube publicaciones</p>
            <form action="">
                <input placeholder='Nombre' type="text" id="name" />
                <input placeholder='Apellido' type="text" id="last-name" />
                <input placeholder='Telefono' type="text" id="number" />
                <input placeholder='Profesion' type="text" id="profesion" />
                <input placeholder='Correo Electronico' type="email" id="email" />
                <input placeholder='Contraseña' type="password" id="password" />
                <button>Iniciar Sesion</button>
            </form>
        </div>
    </div>
  )
}
