import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Sidebar } from "../components/Header/Sidebar";

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
                icon: "warning",
                title: "Se envio la opinión",
                showConfirmButton: false,
                timer: 1500,
                iconColor : "#064663",
                backdrop : "linear-gradient(#064663b6, #064663b6)",
                padding : "3em",
                color: "#064663",
                customClass : "border", 
              });
              setTimeout(() => {
                navigate('/')
              }, 1500);    
        }else{
            Swal.fire({
                position: "center",
                icon: "warning",
                title: "Ocurrio un error con el envío",
                showConfirmButton: false,
                timer: 1500,
                iconColor : "#064663",
                backdrop : "linear-gradient(#064663b6, #064663b6)",
                padding : "3em",
                color: "#064663",
                customClass : "border", 
              });
        }
    }
    

    return (<>
        <Sidebar/>
        <section className="claims">
            <div className="claims-contain">
              <h2>Sobre nosotros</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi suscipit voluptatibus ad obcaecati error accusantium porro praesentium distinctio odit. Voluptas, quas! Numquam asperiores repellendus necessitatibus qui ipsam quasi modi voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi suscipit voluptatibus ad obcaecati error accusantium porro praesentium distinctio odit. Voluptas, quas! Numquam asperiores repellendus necessitatibus qui ipsam quasi modi voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi suscipit voluptatibus ad obcaecati error accusantium porro praesentium distinctio odit. Voluptas, quas! Numquam asperiores repellendus necessitatibus qui ipsam quasi modi voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi suscipit voluptatibus ad obcaecati error accusantium porro praesentium distinctio odit. Voluptas, quas! Numquam asperiores repellendus necessitatibus qui ipsam quasi modi voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi suscipit voluptatibus ad obcaecati error accusantium porro praesentium distinctio odit. Voluptas, quas! Numquam asperiores repellendus necessitatibus qui ipsam quasi modi voluptate.</p>
            </div>
            <div className="claims-contain-info">
                <div>
                    <h2>Mision</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ut quas soluta aliquid dolor eius, unde illum culpa consectetur expedita odit? Maiores, eius in similique qui cumque placeat libero illum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi suscipit voluptatibus ad obcaecati error accusantium porro praesentium distinctio odit. Voluptas, quas! Numquam asperiores repellendus necessitatibus qui ipsam quasi modi voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi suscipit voluptatibus ad obcaecati error accusantium porro praesentium distinctio odit. Voluptas, quas! Numquam asperiores repellendus necessitatibus qui ipsam quasi modi voluptate.</p>
                </div>
                <div>
                    <h2>Vision</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ut quas soluta aliquid dolor eius, unde illum culpa consectetur expedita odit? Maiores, eius in similique qui cumque placeat libero illum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi suscipit voluptatibus ad obcaecati error accusantium porro praesentium distinctio odit. Voluptas, quas! Numquam asperiores repellendus necessitatibus qui ipsam quasi modi voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi suscipit voluptatibus ad obcaecati error accusantium porro praesentium distinctio odit. Voluptas, quas! Numquam asperiores repellendus necessitatibus qui ipsam quasi modi voluptate.</p>
                </div>
            </div>
            <div className="claims-contain">
                <h2>Que puedes hacer en esta seccion</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ut quas soluta aliquid dolor eius, unde illum culpa consectetur expedita odit? Maiores, eius in similique qui cumque placeat libero illum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi suscipit voluptatibus ad obcaecati error accusantium porro praesentium distinctio odit. Voluptas, quas! Numquam asperiores repellendus necessitatibus qui ipsam quasi modi voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi suscipit voluptatibus ad obcaecati error accusantium porro praesentium distinctio odit. Voluptas, quas! Numquam asperiores repellendus necessitatibus qui ipsam quasi modi voluptate.</p>
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