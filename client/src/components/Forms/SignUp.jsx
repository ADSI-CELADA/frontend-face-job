import logo from "../../assets/img/logo.png";
import { singUpUser } from "../../api/api";
import sweet from "sweetalert2";
import { Form, Formik } from "formik";
import { Navigate,Link } from "react-router-dom";

export const SignUp = () => {
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
            date : "",
            number: "",
            profession: "",
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            const response = await singUpUser(values);
            console.log(response);
          /* return <Navigate to="/login" />*/
         

          }}
        >
          {({handleChange, handleSubmit, isSubmitting}) => (
            <Form onSubmit={handleSubmit}>
              <input placeholder="Nombre" type="text" name="name" onChange={handleChange}/>
              <input placeholder="Apellido" type="text" name="lastname" onChange={handleChange}/>
              <input placeholder="Fecha de Nacimiento" type="date" name="date" onChange={handleChange} />
              <input placeholder="Telefono" type="text" name="number" onChange={handleChange}/>
              <input placeholder="Profesion" type="text" name="profesion" onChange={handleChange}/>
              <input placeholder="Correo Electronico" type="email" name="email" onChange={handleChange}/>
              <input placeholder="Contraseña" type="password" name="password" onChange={handleChange}/>
              <button> { isSubmitting ? 'Registrando...' : 'Registrar'} </button>
            </Form>
          )}
        </Formik>
        <Link to="/login">¿Ya tienes cuenta? Inicia sesion</Link>
        <Link to="/">volver</Link>
      </div>
    </div>
  );
};
