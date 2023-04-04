import React, { useState,useContext, useEffect } from 'react'
import icon from '../../assets/img/bear.jpg'
import follow from '../../assets/img/follow.png'
import like from '../../assets/img/like.png'
import send from '../../assets/img/send.png'
import post from '../../assets/img/post.png'
import { changeImgProfile } from '../../api/apiPosts'
import { contextUser } from '../../Hooks/userContext'
import { consultProfileProfessions } from '../../api/api'
import { Link,useNavigate } from 'react-router-dom'

export const Banner = () => {
  let navigate=useNavigate()
let contextPosts=useContext(contextUser)
const [infoUser,setInfoUser]=useState({iconUser:"",name:"",profession:""})
const [file, setFile] = useState(null);


useEffect(()=>{
   async function loadInfoUserk() {
   console.log(contextPosts.emailProfessions);
   
      let email=contextPosts.emailProfessions
    
      const  result=await consultProfileProfessions(email)
        setInfoUser({iconUser:result.data[0].iconUser,name:result.data[0].name,profession:result.data[0].profession})
        
      
    
   

        
        
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
                <div className="banner-icon" >
                    <img src={infoUser.iconUser} alt="icon"/>
                        
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
