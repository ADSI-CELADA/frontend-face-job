import React from 'react'
import { Form, Formik } from "formik";
import { updateDataUser } from "../../api/api";
import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

export const Update = () => {
    let navigate=useNavigate()

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
                name:"",
                number:"", 
                professional:"", 
                lastname:"" 
            }}
            onSubmit={async(values) => {
                try {
                    const result = await updateDataUser(values)
                    console.log(values);
                    console.log(result);
                    if (result.data.data == "UPDATE_INFO") {
                        navigate('/Ajustes')
                    }
                    if(result.data.data == "UPDATE_NOT"){
                        alert("no se actualizo")
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
                
                <button type="submit">{isSubmitting ? "Actualizando..." : "Actualizar" }</button>
                </Form>
            )}
            </Formik>
        </div>
    </div>
    )
}