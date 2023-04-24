import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { loadInfoUser } from "../api/api";
import { getPostsUser,poststexts } from "../api/apiPosts";
import { Sidebar } from "../components/Header/Sidebar";
import { contextUser } from "../Hooks/userContext";

export const Ajustes = () => {
  const userContext = useContext(contextUser)
  const [infoUser, setInfoUser] = useState([]);
  const [infoAge, setInfoAge] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postsText, setPostsText] = useState([]);

  useEffect(() => {
    async function loadInfoUserSettings() {
      const result = await loadInfoUser();
      setInfoUser(result.data[0]);
      loadImage()
    }
    loadInfoUserSettings();
  }, []);

  async function loadImage() {
    const resp = await getPostsUser(userContext.infoUser.email)
    const resp1 = await poststexts(userContext.infoUser.email)
    setPosts(resp.data)
    setPostsText(resp1.data)
  }

    useEffect(() => {
      async function loadInfoUserSettings() {
        const result = await loadInfoUser();
        let age=""
        for (let i = 0; i < 10; i++) {
        age = age+result.data[0].age[i]; 
        }
        setInfoAge(age);
      }
      loadInfoUserSettings();
    }, []);
  return (
    <>
    <Sidebar/>
      <section className="ajustes-section">
        <div className="bnr">
            <div className="banner">
                <div className="banner-icon">
                    <img src={infoUser.iconUser} alt="icon" />
                    <div className='banner-icon-cape' >Cambiar icono</div>
                </div>
          <div className="banner-nav">
            <nav>
              <ul>
                <li><span>Nombre Completo:</span> {infoUser.namecomplete}</li>
                <li><span>Email:</span> {infoUser.email}</li>
                <li><span>Fecha Nacimiento:</span> {infoAge}</li>
                <li><span>Numero:</span> {infoUser.number}</li>
                <li><span>Paquete:</span> {infoUser.cod_paquete}</li>
                <li><span>Vistas Disponibles:</span> {infoUser.info_paquete}</li>     
              </ul>
            </nav>
          </div>
            </div>
        </div>
        <div className="container-infoUser">
          <section className="container-infoUser-options">
            <Link to="/UpdateForm"><p>Actualizar información</p></Link>  
            <Link to="/DeleteForm"><p >Eliminar cuenta</p></Link>
          </section>
          <div className="description">
            <p>Contenido</p>
            <p>Descripcion</p>
            <p>Me gustas</p>
            <p>Comentarios</p>
            <p>Eliminar</p>
           </div>
          <section className="container-infoUser-posts">
            {posts.map((post)=>(  
              <div key={post.email}>
                <img src={post.img} alt="hola" />
                <p>{post.description}</p>
                <p>{post.likes}</p>
                <p>{post.comments}</p>
                <p><i class='bx bx-trash'></i></p>
              </div>
            ))}
            
            {postsText.map((post)=>(
              <div key={post.email}>
                <p>{post.textos}</p>
                <p>{post.description}</p>
                <p>{post.likes}</p>
                <p>{post.comments}</p>
                <p><i class='bx bx-trash' ></i></p>
              </div>
            ))}
          </section>
        </div>
      </section>  
    </>
  );
};
