import React from 'react'
import icon from '../../assets/img/bear.jpg'
import { getPostsUser } from '../../api/apiPosts'
import { useState,useEffect,useContext } from 'react'
import { contextUser } from '../../Hooks/userContext'
import {
    AiFillHeart,
    AiOutlineHeart,
    AiFillSetting,
    AiFillCloseCircle,
  } from "react-icons/ai";
  import { IconContext } from "react-icons";
  import { Link } from "react-router-dom";
  import { loadInfoUser } from '../../api/api'
export const Post = () => {
    let userContextInfo=useContext(contextUser)
    const [posts, setPosts] = useState([]);
    const [boton, setBoton] = useState([]);
    const [settings, setSettings] = useState(false);
    const [changes,setChanges]=useState("not changes")
    const [gestionImg, setGestionImg] = useState({
        id: "0",
        email: "",
        img: "",
      });
      const [infoUser,setInfoUser]=useState(null)
    useEffect(() => {
      async function loadImages() {
        async function loadInfoUserk() {
            const  result=await loadInfoUser()
            setInfoUser(result.data[0])
            setChanges("change")
         
        }
        loadInfoUserk()
        let response = await  getPostsUser(infoUser.email);
        setPosts(response.data)
        setChanges("change")
        console.log(response);
        if (response.data[0].email == infoUser.email) {
          setSettings(true);
          setChanges("change")
          
        } else {
          setSettings(false);
          setChanges("change")
        }
      }
  
      loadImages();
    }, [changes]);

    




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
            <input type="text" placeholder='Post commnet'/>
            <h2>{post.name}</h2>
            <p>{post.description}</p>
        </div>
        <div className="post-stats">
            <div className="post-like"><p>Likes {post.likes}</p></div>
            <div className="post-comment">📝</div>
          
        </div>
    </div>
</section>

   ))}
 </>
  )
}
