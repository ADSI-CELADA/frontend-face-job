import React from 'react'
import { Form, Formik } from "formik";
import {deleteDataUser } from "../../api/api";
import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie'

export const DeleteUser = () => {
    let navigate=useNavigate()
    const cookies=new Cookies();

    const closeSesion=()=>{
        cookies.remove('token',{path:"/"})
        window.location.href="/"
        }

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
        <p>Eliminar cuenta</p>
        <Formik
            initialValues={{
                password:""   
            }}
            onSubmit={async(values) => {
                try {
                    const result = await deleteDataUser(values)
                    console.log(values);
                    console.log(result);
                    if (result.data.data == "eliminado") {
                        closeSesion()
                        
                        setTimeout(() => {
                          navigate('/')  
                        }, 1500);
                    }
                    else{
                        alert("no se elimino")
                    }
                    
                    
                } catch (error) {
                    console.error(error);
                }
            }}
            >
            {({ handleChange, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                <input
                    placeholder="Contraseña actual"
                    type="password"
                    id="password"
                    onChange={handleChange}
                    name="password"
                    required
                />
                <button type="submit">Confirmar</button>
                </Form>
            )}
            </Formik>
        </div>
    </div>
    )
}