import logo from "../../assets/img/logo.png";
import { Form, Formik } from "formik";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
let url = "http://localhost:4000";

export const LogIn = () => {
 const  navigate=useNavigate()
  const singInUser = async (values) => {
    return await axios.post(`${url}/loginCliente`, values);
  };

  return (
    <div className="log-in">
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="log-in-form"
      >
        <h2>Bienvenido a</h2>
        <section>
          <img src={logo} alt="logo" />
          <p>Face-Job</p>
        </section>
        <p>Unete a nosotros, crea tu perfil y sube publicaciones</p>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            let response = await singInUser(values);
            const {
              data: { data, result, token },
            } = response;
            console.log(result);

            if (data == "logueado") {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Logueado",
                showConfirmButton: false,
                timer: 1500,
              });
              document.cookie=`token=${response.data.token};max-age=${60*1440};path=/;samesite=strict`
              window.location.href="/"
            } else if (data == "PASSWORD_ERROR") {
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Contraseña incorrecta",
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "El usuario no existe",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          }}
        >
          {({ isSubmitting, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <input
                name="email"
                placeholder="Correo Electronico"
                type="email"
                id="email"
                onChange={handleChange}
                required
              />
              <input
                placeholder="Contraseña"
                type="password"
                id="password"
                onChange={handleChange}
                name="password"
                required
              />
              <button type="submit">Iniciar Sesion</button>
            </Form>
          )}
        </Formik>
        <a href="/signup">¿No tienes cuenta? registrate</a>
        <a href="/RecoveryPass">¿Olvidate tu contraseña? recuperala</a>
        <a href="/">volver</a>
      </div>
    </div>
  );
};
