import logo from '../../../../assets/img/logo.png'
import { useState,useContext } from 'react';
import { contextUser } from '../../../../Hooks/userContext';
import { createPostImage } from '../../../../api/apiPosts';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

export const CreatePost = () => {
    const  navigate=useNavigate()
   let usercContextInfo=useContext(contextUser)
    const [descriptions, setDescriptions] = useState("");
  const [file, setFile] = useState(null);
  const[textoLoad,setTextoLoad]=useState('Subir')
  const selectedHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const selectedDescription = () => {
   let obtainDescription = document.getElementById("description").value;
    setDescriptions(obtainDescription);
  };
  const sendHandler = async () => {
   
   if (!file) {
      alert("Debes selecionar un archivo de imagen");
      
      
    } else {
      setTextoLoad('Subiendo...')
      let email = usercContextInfo.infoUser.email;
      const formdata = new FormData();
      formdata.append("description", descriptions);
      formdata.append("img", file);
      const result = await createPostImage(email, formdata);
      console.log(result);
    }
    document.getElementById("description").value = null;
    document.getElementById("file").value = null;
    setFile(null);
    setDescriptions("");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se cargo la publicación exitosamente",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(()=>{
      setTextoLoad('Subir')
      navigate('/profile')
    },1500)
    
    
  };

  return (
    <div className="log-in">
        <div data-aos="fade-left" data-aos-duration="1000"  className="log-in-form">
            <h2>Bienvenido a</h2>
            <section>
                <img src={logo} alt="logo" />
                <p>Face-Job</p>
            </section>
            <p>Crea tu publicación</p>
            <div className="form-post">
                <input id='description' placeholder='description image' type="text"   onChange={selectedDescription}/>
                <input placeholder='image' type="file" id="file" onChange={selectedHandler} />
                <button id="mandar" onClick={sendHandler}>{textoLoad}</button>
            </div>
          
        </div>
    </div>
  )
  }