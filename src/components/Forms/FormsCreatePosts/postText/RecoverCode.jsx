import logo from '../../../../assets/img/logo.png'
import { Form,Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { contextUser } from '../../../../Hooks/userContext'
import { useContext } from 'react'
import { validateCodeEmail } from '../../../../api/api'
export const RecoverCode = () => {
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
            <p>Escribe el codigo que se envio a tu correo</p>
            <Formik
            initialValues={
            {
              codigo:"",
       
          }
            }
            onSubmit={async (values)=>{
              console.log(context.recoverPass);
            const result=await validateCodeEmail(context.recoverPass,values)
            if(result.data.data=="CODE_VALIDE"){
              navigate('/recoverNewPass')
            }else{
              alert('codigo incorrecto')
            }
            }}
            >
              {({handleChange,handleSubmit,isSubmitting})=>(
              <Form onSubmit={handleSubmit}>
                <input placeholder='escribe el codigo' type="number" id="codigo" name='codigo' onChange={handleChange} />
                 <button>enviar</button>
              </Form>
            )}
              </Formik> 
     
              <Link to="/">volver</Link>
            
           
        </div>
    </div>
  )
}
