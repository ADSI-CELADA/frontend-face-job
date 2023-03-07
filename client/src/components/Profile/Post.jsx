import React from 'react'
import { useState, useEffect,useContext } from "react";
import {postsUserImages} from '../../api/api'
import { contextUser } from '../../assets/context/usercContext';
import {
    AiFillHeart,
    AiOutlineHeart,
    AiFillSetting,
    AiFillCloseCircle,
  } from "react-icons/ai";
  import { IconContext } from "react-icons";

  export const Post = () => {
    let userContextInfo=useContext(contextUser)
 
    const [posts, setPosts] = useState([]);
  const [boton, setBoton] = useState([]);
    useEffect(() => {
    async function loadImages() {
      let email = userContextInfo.infoUser.email
      console.log(email);
      let response = await postsUserImages(email);
      setPosts(response.data);
            console.log(response);
    
    }

    loadImages();
  }, [boton]);
  return (
  <>
  {posts.map((post)=>(
     <section className="post-contain" key={post.id}>
     <div data-aos="fade-up" data-aos-duration="1000" className="post">
         <div className="post-info">
             <div className="post-icon"></div>
             <div>
             <h2>{post.name}</h2>
             <p>{post.profession}</p>
             </div>
         </div>
         <div className="post-img">
            <img src={post.img} alt="" />
         </div>
         <div className="post-content">
             <input type="text" placeholder='Post commnet'/>
         </div>
         <div className="post-stats">
             <div className="post-like">❤</div>
             <div className="post-comment">📝</div>
             <div className="post-share">💬</div>
         </div>
     </div>
 </section>
  ))
   
  }
  </>
 
  )
}
