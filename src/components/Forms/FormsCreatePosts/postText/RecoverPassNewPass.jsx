import logo from '../../../../assets/img/logo.png'
import { Form,Formik } from 'formik'
import { Link } from 'react-router-dom'
import { contextUser } from '../../../../Hooks/userContext'
import { useContext } from 'react'
import { updatePasswordEmail } from '../../../../api/api'
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"
export const RecoverPassNewPass = () => {
    let context=useContext(contextUser)
    let navigate=useNavigate()
  return (
    
    <div className="log-in">
      
        <div data-aos="fade-left" data-aos-duration="1000"  className="log-in-form">
            <h2>Bienvenido a</h2>
            <section>
                <img src={logo} alt="logo" />
                <p>Face-Job</p>
            </section>
            <p>Ingresa una nueva contraseña</p>
            <Formik
            initialValues={
            {
                password:"",
       
          }
            }
            onSubmit={async (values)=>{
              console.log(context.recoverPass);
            const result=await updatePasswordEmail(context.recoverPass,values)
            console.log(result);
            if (result.data.data=="PASSWORD_UPDATE") {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Su cambio de contraseña fue exitoso, ya puedes loguearte",
                showConfirmButton: false,
                timer: 1500,
                iconColor : "#064663",
                backdrop : "white",
                padding : "3em",
                color: "#064663",
                customClass : "border", 
              });
              setTimeout(() => {
                navigate('/')
              }, 2000);
            }
            }}
            >
              {({handleChange,handleSubmit,isSubmitting})=>(
              <Form onSubmit={handleSubmit}>
                <input placeholder='escribe tu nueva contraseña' type="password" id="password" name='password' onChange={handleChange} />
                 <button>enviar</button>
              </Form>
            )}
              </Formik> 
     
              <Link to="/">volver</Link>
            
           
        </div>
    </div>
  )
}
