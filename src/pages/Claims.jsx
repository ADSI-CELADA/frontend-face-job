import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Navbar } from "../components/Header/Navbar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Claims = () => {
    
    let navigate=useNavigate()
    const refForm = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const serviceId = "service_siwn19p"
        const tmplateId = "template_yb0b88j"

        const apiKey = "7hDrh624g_uBBd-Gn"

        emailjs.sendForm(serviceId,tmplateId,refForm.current,apiKey)
        .then(result => changeClaim(result.text))
        .catch(error => changeClaim(error))
    }

    function changeClaim(value) {
        if(value == "OK"){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "se envio su opinión",
                showConfirmButton: false,
                timer: 1500,
              });
              setTimeout(() => {
                navigate('/')
              }, 1500);    
        }else{
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Ocuriio un error con el envio",
                showConfirmButton: false,
                timer: 1500,
              });
        }
    }
    

    return (<>
        <Navbar/>
        <section className="claims">
            <div className="claims-contain">
              <h2>Sobre nosotros</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi suscipit voluptatibus ad obcaecati error accusantium porro praesentium distinctio odit. Voluptas, quas! Numquam asperiores repellendus necessitatibus qui ipsam quasi modi voluptate.</p>
            </div>
            <div className="claims-contain">
                <h2>this is title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ut quas soluta aliquid dolor eius, unde illum culpa consectetur expedita odit? Maiores, eius in similique qui cumque placeat libero illum.</p>
            </div>
            <div className="claims-form">
                <form ref={refForm} onSubmit={handleSubmit}>
                    <h2>Deja tu opinión</h2>
                    <input name="username" type="text" placeholder="Su nombre" />
                    <textarea name="message" cols="30" rows="10" placeholder="Escriba su opinión"></textarea>
                    <button>Enviar opinión</button>
                </form>
            </div>
        </section>
    </>
    )
}