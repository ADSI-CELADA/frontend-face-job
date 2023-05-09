import { useContext } from 'react';
import { contextUser } from '../../../../Hooks/userContext';
import { createPostText } from '../../../../api/apiPosts';
import { Formik, Form } from "formik";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

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
             Swal.fire({
              position: "center",
                icon: "success",
                title: "Se cargo la publicación exitosamente",
                showConfirmButton: false,
                timer: 1500,
                iconColor : "#064663",
                backdrop : "linear-gradient(#064663b6, #064663b6)",
                padding : "3em",
                color: "#064663",
                customClass : "border", 
            });
            setTimeout(()=>{
              navigate('/profile')
            },1500)
             
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
                <img src="https://res.cloudinary.com/de2sdukuk/image/upload/v1681834064/Logo_st4un7.png" alt="logo" />
                <p>Face-Job</p>
            </section>
            
            <p>Crea tu publicación</p>
            <Form onSubmit={handleSubmit}>
            <div>
                <input  name='textos' id='description' placeholder='texto ' type="text"  style={{marginTop:"10px"}}  onChange={handleChange}/>
                <input name='description' placeholder='description' type="text"  style={{marginTop:"10px"}}  onChange={handleChange}/>
                <button id="mandar"  style={{marginTop:"10px"}}>  {isSubmitting ? "publicando..." : "publicar" }</button>
            </div>
           
              </Form>
        </div>
       
    </div>
   
        )}
    </Formik>
  )
  }