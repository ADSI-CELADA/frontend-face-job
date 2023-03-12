import logo from "../../assets/img/logo.png";
import { singUpUser } from "../../api/api";
import Swal from "sweetalert2";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
  let navigate=useNavigate()
  return (
    <div className="sign-up">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="sign-up-form"
      >
        <h2>Bienvenido a</h2>
        <section>
          <img src={logo} alt="logo" />
          <p>Face-Job</p>
        </section>
        <p>Unete a nosotros, crea tu perfil y sube publicaciones</p>
        <Formik
          initialValues={{
            name: "",
            lastname: "",
            date: "",
            number: "",
            profession: "",
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            const response = await singUpUser(values);
            const {
              data: { data },
            } = response;
            if (data == "INSERT_OK") {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registrado",
                showConfirmButton: false,
                timer: 1500,
                
              });
              navigate('/')
            } else {
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "error",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          }}
        >
          {({ handleChange, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <input
                placeholder="Nombre"
                type="text"
                name="name"
                onChange={handleChange}
                required
              />
              <input
                placeholder="Apellido"
                type="text"
                name="lastname"
                onChange={handleChange}
                required
              />
              <input
                placeholder="Fecha de Nacimiento"
                type="date"
                name="date"
                onChange={handleChange}
                required
              />
              <input
                placeholder="Telefono"
                type="text"
                name="number"
                onChange={handleChange}
                required
              />
              <input
                placeholder="Profesion"
                type="text"
                name="profession"
                onChange={handleChange}
                required
              />
              <input
                placeholder="Correo Electronico"
                type="email"
                name="email"
                onChange={handleChange}
                required
              />
              <input
                placeholder="Contraseña"
                type="password"
                name="password"
                onChange={handleChange}
                required
              />
              <button type="submit">
                {" "}
                {isSubmitting ? "Registrando..." : "Registrar"}{" "}
              </button>
            </Form>
          )}
        </Formik>
        <a href="/login">¿Ya tienes cuenta? Inicia sesion</a>
        <a href="/">volver</a>
      </div>
    </div>
  );
};
