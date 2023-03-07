import logo from '../../../assets/img/logo.png'
import { useState,useContext } from 'react';
import { contextUser } from '../../../assets/context/usercContext';
export const CreatePost = () => {
    let usercContextInfo=useContext(contextUser)
    const [des, setDes] = useState("");
  const [file, setFile] = useState(null);

  const selectedHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const selectedDescription = () => {
    let kk = document.getElementById("description").value;
    setDes(kk);
  };
  const sendHandler = async () => {
    if (!file) {
      alert("Debes selecionar un archivo de imagen");
    } else {
      let ll = cookies.get("email");
      const formdata = new FormData();
      formdata.append("description", des);
      formdata.append("img", file);
      const result = await createImage(ll, formdata);
      console.log(result);
    }
    document.getElementById("description").value = null;
    document.getElementById("file").value = null;
    setFile(null);
    setDes("");
    
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
            <form action="">
                <input placeholder='description image' type="text" id="email"  onChange={selectedDescription}/>
                <input placeholder='image' type="file" id="password" onChange={selectedHandler} />
                <button id="mandar" onClick={sendHandler}>subir</button>
            </form>
            <a href='/signup'>¿No tienes cuenta? registrate</a>
              <a href="/">volver</a>
        </div>
    </div>
  )
}