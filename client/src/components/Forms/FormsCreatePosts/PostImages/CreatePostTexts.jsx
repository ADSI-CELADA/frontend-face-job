import logo from '../../../../assets/img/logo.png'
import { useContext } from 'react';
import { contextUser } from '../../../../Hooks/userContext';
import { createPostText } from '../../../../api/apiPosts';
import { Formik, Form } from "formik";
import { useNavigate } from 'react-router-dom';

export const CreatePostTexts = () => {
let navigate=useNavigate()
   let usercContextInfo=useContext(contextUser)

  
  return (

         <Formik
           initialValues={{
           textos: "",
        description: "",
          }}
          onSubmit={async (values) => {
           try {
             let email=usercContextInfo.infoUser.email
          let response = await createPostText(email,values)
             console.log(response);
             navigate('/profile')
             
            } catch  {
            console.log("error");
            }
         }}
       >
     {({ handleChange, handleSubmit, isSubmitting }) => (   
       
    <div className="log-in">
        <div data-aos="fade-left" data-aos-duration="1000"  className="log-in-form">
            <h2>Bienvenido a</h2>
            <section>
                <img src={logo} alt="logo" />
                <p>Face-Job</p>
            </section>
            
            <p>Unete a nosotros, crea tu perfil y sube publicaciones</p>
            <Form onSubmit={handleSubmit}>
            <div>
                <input  name='textos' id='description' placeholder='texto ' type="text"   onChange={handleChange}/>
                <input name='description' placeholder='description' type="text"   onChange={handleChange}/>
                <button id="mandar" >  {isSubmitting ? "publicando..." : "publicar" }</button>
            </div>
            <a href='/signup'>¿No tienes cuenta? registrate</a>
              <a href="/">volver</a>
              </Form>
        </div>
       
    </div>
   
        )}
    </Formik>
  )
  }