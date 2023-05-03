import React from 'react'
import { Form, Formik } from "formik";
import { updateDataUser } from "../../api/api";
import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"

export const Update = () => {
    let navigate = useNavigate()

    return (
        <div className='log-in'>
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
                <p>Actualizar Datos</p>
                <Formik
                    initialValues={{
                        name: "",
                        number: "",
                        professional: "",
                        lastname: ""
                    }}
                    onSubmit={async (values) => {
                        try {
                            const result = await updateDataUser(values)
                            console.log(values);
                            console.log(result);
                            if (result.data.data == "UPDATE_INFO") {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Cambio exitoso",
                                    showConfirmButton: false,
                                    timer: 1500,
                                    iconColor: "#064663",
                                    backdrop : "linear-gradient(#064663b6, #064663b6)",
                                    padding: "3em",
                                    color: "#064663",
                                    customClass: "border",
                                });
                                setTimeout(() => {
                                    navigate('/Ajustes')
                                }, 1500);
                            }
                            if (result.data.data == "UPDATE_NOT") {
                                Swal.fire({
                                    position: "center",
                                    icon: "error",
                                    title: "No se actualizo la información",
                                    showConfirmButton: false,
                                    timer: 1500,
                                    iconColor: "#064663",
                                    backdrop : "linear-gradient(#064663b6, #064663b6)",
                                    padding: "3em",
                                    color: "#064663",
                                    customClass: "border",
                                });
                            }

                        } catch (error) {
                            console.error(error);
                        }
                    }}
                >
                    {({ handleChange, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <input
                                name="name"
                                placeholder="Nombre"
                                type="text"
                                id="name"
                                onChange={handleChange}
                                required
                            />
                            <input
                                name="lastname"
                                placeholder="Apellido"
                                type="text"
                                id="lastname"
                                onChange={handleChange}
                                required
                            />
                            <input
                                placeholder="Numero"
                                type="text"
                                id="number"
                                onChange={handleChange}
                                name="number"
                                required
                            />
                            <input
                                name="professional"
                                placeholder="Profesion"
                                type="text"
                                id="professional"
                                onChange={handleChange}
                                required
                            />

                            <button type="submit">{isSubmitting ? "Actualizando..." : "Actualizar"}</button>
                            <Link to="/Ajustes">volver</Link>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}