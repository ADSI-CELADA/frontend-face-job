import logo from '../../assets/img/logo.png'
import { Form,Formik } from 'formik'
import { singInUser } from '../../api/api'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
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
            <Formik
            initialValues={
            {
              email:"",
            password:"",
          }
            }
            onSubmit={async (values)=>{
              const response=await singInUser(values)
              console.log(response.data);
              if (response.data.data=="logueado") {
                document.cookie=`token=${response.data.token};max-age=${60*1440};path=/;samesite=strict`
                return <Navigate to="/profile" />
              }else{
                return alert("correo o contraseña incorrecta")
              }
            }}
            >
              {({handleChange,handleSubmit,isSubmitting})=>(
              <Form onSubmit={handleSubmit}>
                <input placeholder='Correo Electronico' type="email" id="email" name='email' onChange={handleChange} />
                <input placeholder='Contraseña' type="password" id="password" name='password'  onChange={handleChange}  />
                <button>{ isSubmitting ? 'Iniciando Sesion...' : 'Iniciar Sesion'}</button>
              </Form>
            )}
              </Formik> 
            <Link to='/signup'>¿No tienes cuenta? registrate</Link>
              <Link to="/">volver</Link>
            
           
        </div>
    </div>
  )
}
