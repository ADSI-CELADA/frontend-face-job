import logo from '../../../../assets/img/logo.png'
import { useState,useContext } from 'react';
import { contextUser } from '../../../../Hooks/userContext';
import { createPostImage } from '../../../../api/apiPosts';
import { useNavigate } from 'react-router-dom';


export const CreatePost = () => {
    const  navigate=useNavigate()
   let usercContextInfo=useContext(contextUser)
    const [descriptions, setDescriptions] = useState("");
  const [file, setFile] = useState(null);

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
    navigate('/profile')
    
  };

  return (
    <div className="log-in">
        <div data-aos="fade-left" data-aos-duration="1000"  className="log-in-form">
            <h2>Bienvenido a</h2>
            <section>
                <img src={logo} alt="logo" />
                <p>Face-Job</p>
            </section>
            <p>Unete a nosotros, crea tu perfil y sube publicaciones</p>
            <div className="form-post">
                <input id='description' placeholder='description image' type="text"   onChange={selectedDescription}/>
                <input placeholder='image' type="file" id="file" onChange={selectedHandler} />
                <button id="mandar" onClick={sendHandler}>subir</button>
            </div>
            <a href='/signup'>¿No tienes cuenta? registrate</a>
              <a href="/">volver</a>
        </div>
    </div>
  )
  }