import React from 'react'
import { getPostsUser } from '../../api/apiPosts'
import { useState,useEffect } from 'react'
import { contextUser } from '../../Hooks/userContext'
import {
    AiFillHeart,
    AiOutlineHeart,
    AiFillSetting,
    AiFillCloseCircle,
  } from "react-icons/ai";
  import {  BsFillSendFill } from "react-icons/bs";
  import { IconContext } from "react-icons";
  import { Link } from "react-router-dom";
  import { loadInfoUser } from '../../api/api'
  import { like,dislike,DeletePostImage,insertComment } from '../../api/apiPosts'
export const Post = () => {
    
    const [posts, setPosts] = useState([]);
    const [settings, setSettings] = useState(false);
    const [changes,setChanges]=useState("not changes")
    const [boton,setBoton]=useState([])
    const [gestionImg, setGestionImg] = useState({
        id: "0",
        email: "",
        img: "",
      });
      const [infoUser,setInfoUser]=useState(null)
 
    useEffect(() => {
     
        async function loadInfoUserk() {
            const  result=await loadInfoUser()
            setInfoUser(result.data[0])
            setChanges("change")
         loadImages()
        }
        loadInfoUserk()
       
    }, [changes,boton]);
async function loadImages(){
  
    if (infoUser!=null) {
      let response = await  getPostsUser(infoUser.email);
    setPosts(response.data)
 
    
    if (response.data[0].email == infoUser.email) {
      setSettings(true);
      setChanges("change")
      
    } else {
      setSettings(false);
      setChanges("changes")
    }
    }else{
      console.log("not found");
      setChanges("cambios")
    }

    
}
    function postData(id, email, img) {
      document.getElementById("lolbel").click();
      let lista = { id: id, email: email, img: img };
      setGestionImg(lista);
    }



    async function likeThis(id) {
      for (let i = 0; i < posts.length; i++) {
        if (posts[i].estado == "nomegusta" && posts[i].id == id) {
         
  
          const formdata = new FormData();
          formdata.append("id", id);
          const result = await like(formdata);
          console.log(result);
          setBoton(result)
        } else {
          console.log("ya dio like");
        }
      }
    }
    async function notLikeThis(id) {
      for (let i = 0; i < posts.length; i++) {
        if (posts[i].estado == "megusta" && posts[i].id == id) {
       
          const formdata = new FormData();
          formdata.append("id", id);
          const result = await dislike(formdata);
          console.log(result);
          setBoton(result)
        } else {
          console.log("ya dio dislike");
        }
      }
    }
    function alert() {
      document.getElementById("lolbel3").click();
    }
    async function deletePost() {
      let id = gestionImg.id;
      console.log("Se esta eliminando...");
      const result = await DeletePostImage(id);
      console.log("se elimino", result);
      window.location.href = "/profile";
    }
async  function comment(id) {
    console.log('send',id);
    let comment=document.getElementById('coment').value
    const formdata=new FormData()
    formdata.append("comment",comment)
    const result=await insertComment(id,formdata)
    console.log(result);
  }

  return (
    <>
   {posts.map((post)=>(
    <section className="post-contain" key={post.id}>
    <div data-aos="fade-up" data-aos-duration="500" className="post">
        <div className="post-info">
            <div className="post-icon">
                <img src={post.iconUser} alt="icon"/>
            </div>
            <div>
            <h2>{post.name}</h2>
            <p>{post.profession}</p>
            </div>
            <div className="menu"
                  style={{ display: "flex", justifyContent: "flex-end" }}>
            {settings ? (
                    <span
                      onClick={() => {
                        postData(post.id, post.email, post.img);
                      }}
                    >
                      <IconContext.Provider
                        value={{
                          size: "30px",
                          color: "white",
                          border: "solid #043248 ",
                        }}
                      >
                        <div>
                          <AiFillSetting />
                        </div>
                      </IconContext.Provider>
                    </span>
                  ) : (
                    ""
                  )}
            </div>
        </div>
        <div className="post-img">
            <img src={post.img} alt="" />
        </div>
        <div className="post-content">
          <p style={{display:"flex"}}>
            <input type="text" placeholder="Post commnet"  id='coment' /> <p style={{marginTop:"10px",marginLeft:"5px"}}><BsFillSendFill onClick={()=>{comment(post.id)}} /></p>
          </p>
            
            <h2>{post.name}</h2>
            <p>{post.description}</p>
        </div>
        <div className="post-stats">
            <div className="post-like"><p style={{display:"flex",cursor:"pointer"}}>Likes {post.likes}   <span
                        onClick={() => {
                          likeThis(post.id);
                        }}
                        onDoubleClick={() => {
                          notLikeThis(post.id);
                        }}
                      > {post.estado == "megusta" ? (
                          <IconContext.Provider
                            value={{
                              size: "30px",
                              color: "red",
                              border: "solid #043248 ",
                            }}
                          >
                            <div>

                              <AiFillHeart />
                            </div>
                          </IconContext.Provider>
                        ) : (
                          <IconContext.Provider
                            value={{
                              size: "30px",
                              color: "red",
                              border: "solid #043248 ",
                            }}
                          >
                            <div>

                              <AiOutlineHeart />
                            </div>
                          </IconContext.Provider>
                        )}</span></p></div>
           
            <div className="post-comment">📝</div>
          
        </div>
    </div>
</section>

   ))}
 <div className="boton2-modal">
            <label htmlFor="btn2-modal" id="lolbel">
              Abrir Modal
            </label>
          </div>
          <input type="checkbox" id="btn2-modal" />
          <div className="container2-modal">
            <div className="content2-modal">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Gestionar Publicacion</h2>{" "}
                <span>
                  <label htmlFor="btn2-modal">
                    <IconContext.Provider value={{ size: "30px" }}>
                      {" "}
                      <div>
                        {" "}
                        <AiFillCloseCircle />
                      </div>
                    </IconContext.Provider>
                  </label>
                </span>
              </div>

              <p>Deseas eliminar  tu publicacion?</p>
              <div className="btn2-cerrar">
               
                <label  onClick={alert}>
                  Eliminar
                </label>
              </div>
            </div>
            <label htmlFor="btn2-modal" className="cerrar2-modal"></label>
          </div>
          <div className="boton3-modal">
            <label htmlFor="btn3-modal" id="lolbel3">
              Abrir Modal
            </label>
          </div>
          <input type="checkbox" id="btn3-modal" />
          <div className="container3-modal">
            <div className="content3-modal">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Eliminar publicacion</h2>{" "}
                <span>
                  <label htmlFor="btn3-modal">
                    <IconContext.Provider value={{ size: "30px" }}>
                      {" "}
                      <div>
                        {" "}
                        <AiFillCloseCircle />
                      </div>
                    </IconContext.Provider>
                  </label>
                </span>
              </div>

              <p>
                Estas seguro de eliminar esta publicacion?
                <img src={gestionImg.img} alt="imagen" />
              </p>
              <div className="btn3-cerrar">
                <label onClick={deletePost}>Eliminar</label>
              </div>
            </div>
            <label htmlFor="btn3-modal" className="cerrar3-modal"></label>
          </div>
    

 </>
  )
}
