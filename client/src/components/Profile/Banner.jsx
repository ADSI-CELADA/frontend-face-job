import React, { useState,useContext, useEffect } from 'react'
import follow from '../../assets/img/follow.png'
import like from '../../assets/img/like.png'
import post from '../../assets/img/post.png'
import { changeImgProfile } from '../../api/apiPosts'
import { contextUser } from '../../Hooks/userContext'
import { loadInfoUser } from '../../api/api'
import { Link } from 'react-router-dom'
export const Banner = () => {
let contextPosts=useContext(contextUser)
const [infoUser,setInfoUser]=useState([])
const [file, setFile] = useState(null);

useEffect(()=>{
   async function loadInfoUserk() {
        const  result=await loadInfoUser()
        setInfoUser(result.data[0])
     
        
    }
   loadInfoUserk()

},[])

function sendImage() {
    async function loadImage() {
      const formdata = new FormData();
      formdata.append("img", file);
      const res = await changeImgProfile(formdata);

      console.log(res);
      window.location.href = "/profile";
    }
    
loadImage()
    document.getElementById("file").value = null;
    setFile(null);
  }


const selectedHandler = (e) => {
    console.log("sii");
console.log(e.target.files[0]);
    if (!e.target.files[0]) {
      alert("Debes selecionar un archivo de imagen");
    } else {
      setFile(e.target.files[0]);
      document.getElementById("labelClick").click();
    }
  };
    const [ fix, setFix ] = useState(false)

    function setFixedBanner(){
        if (window.scrollY >=20){
            setFix(true)
        } else{
            setFix(false)
        }
    }

    window.addEventListener('scroll',setFixedBanner)
    const changesFor = (e) => {
        document.getElementById("file").click();
      };
      function postImages() {
        contextPosts.postImages() 
        console.log(contextPosts.imagesTexts);
      }
      function postText() {
        contextPosts.postTexts() 
        console.log(contextPosts.imagesTexts);
      }

  return (
    <section className={fix ? 'bnr fixed' : 'bnr'}>
        <div className="banner">
            <section>
                <div className="banner-icon" onClick={changesFor}>
                    <img src={infoUser.iconUser} alt="icon"/>
                    <div className='banner-icon-cape' >Cambiar icono</div>
                </div>
                    <div className="banner-info">
                        <h2>{infoUser.name}</h2>
                        <p>{infoUser.profession}</p>
                        <div className="banner-stats">
                            <ul>
                                <li><i className='bx bx-user-plus bx-md'></i></li>
                                <li><i className='bx bx-heart bx-md'></i></li>
                                <li><i className='bx bx-folder-plus bx-md' ></i></li>
                            </ul>
                        </div>
                    </div>  
                    <div className="banner-nav">
                        <nav>
                            <ul>
                                <li><a href="#" ><span onClick={postImages}>Publicaciones</span> </a></li>
                                <li><a href="#" ><span onClick={postText}>Postales</span></a></li>
                                <li> <Link to="/createPostImage" >Publicar</Link></li>
                                <li> <Link to="/Ajustes" >Ajustes</Link></li>
                            </ul>
                        </nav>
                    </div>              
            </section>
        </div>


        <input
                  type="file"
                  className="borton"
                  id="file"
                  onChange={selectedHandler}
                />

        <input type="checkbox" id="btn-modal" />
        <div className="boton-modal">
          <label htmlFor="btn-modal" id="labelClick">
            Abrir Modal
          </label>
        </div>
        <div className="container-modal">
          <div className="content-modal">
            <h2>¡Bienvenido!</h2>
            <p>
              Ten informamos que estas a punto de cambiar tu foto de perfil , la
              anterior sera eliminada y replazada por la seleccionada ¿estas
              seguro de cambiar?
            </p>
            <div className="btn-cerrar">
              <label htmlFor="btn-modal">Cerrar</label>
              <label onClick={sendImage} style={{ marginLeft: "20px" }}>
                aceptar
              </label>
            </div>
          </div>
          <label htmlFor="btn-modal" className="cerrar-modal"></label>
        </div>
    
    </section>
  )
}
