import { sendMenssageUser,messagesPrivateUsers,dataUsuerChat,workingUsers,delteChatComversations } from '../../api/apiChat'
import { loadInfoUser } from '../../api/api'
import { useState,useEffect } from 'react'
import { useContext } from 'react'
import { contextUser } from "../../Hooks/userContext"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/img/Logo.png";
function RightSide({text}) {
  const context=useContext(contextUser)
    const soket=text.text
    let navigate=useNavigate()
    const [message,setMessage]=useState('')
    const [messagesPrivate,setMessagesPrivate]=useState([{'remitente':'Face-Job','tipo':'texto','mensaje':'selecciona un chat'}])
    const [changes,setChanges]=useState()
    const [infoUser,setInfoUser]=useState({})
    const [infoProfe,setInfoProfe]=useState({'lastname':'CHAT ','iconUser':logo,'name':'Face-job','profession':'face-Job'})
    const [file, setFile] = useState(null);
  useEffect(()=>{
    const resiveMessage=(message)=>{
  setChanges(message+Math.random)
    }
  
    soket.on('message',resiveMessage )
    return()=>{
      soket.off('message',resiveMessage)
      
    }
  },[])
  useEffect(()=>{

    async function loadMessages() {
      const reponse=await loadInfoUser();
      setInfoUser(reponse.data[0])
      
      if (context.paramUserChat!='' || context.paramUserChat!=undefined) {
         const response=await messagesPrivateUsers(context.paramUserChat)
         if (response.data.length>0) {
          setMessagesPrivate(response.data)
          const res=await dataUsuerChat(context.paramUserChat)
          setInfoProfe(res.data[0])
         }
      

      }
     
    
    }
   
    loadMessages()
    
  },[changes,context.paramUserChat])
  async function handleSubmit(e) {
    e.preventDefault()
    if (message==''|| message==undefined ) {
      alert('Debes escribir algo para poder ser enviado')
    }else{
      if (context.paramUserChat!='' || context.paramUserChat!=undefined) {
        if (!file) {
          
          soket.emit('message',message)
         
    const response=await sendMenssageUser({'message':message,'tipo':'texto'},context.paramUserChat)
    console.log(response.data);
    setMessage('')
    setChanges(response)
    context.changesMenssageUser(response)
        }else{
          if (message=='seleccionaste una imagen Face-Job') {
           
            const formdata = new FormData();
          formdata.append("img",file)
          formdata.append("tipo","img")
          formdata.append("message",message)
          setMessage('Por favor no escribas,espera a que se suba la imagen')
          const response=await sendMenssageUser(formdata,context.paramUserChat)
          setFile(null)
          document.getElementById('imageChat').value=null
          setChanges(response)
          soket.emit('message',message)
          setMessage('')
          context.changesMenssageUser(response)
          
          }
          
        }
        
      }
      
  
    }
  


  }
async function workingUser() {

  const response=await workingUsers(infoProfe.email)
  context.changesMenssageUser(response)
}
  function profileProfessionalChat() {
    context.chageEmailProfessions(infoProfe.email)
    if (context.emailProfessions!="null") {
      navigate('/ProfileProfessions')
    }else{
      if (context.emailProfessions!="null") {
        navigate('/ProfileProfessions')
      }
    }
  }
  
  function clickIcon() {
    document.getElementById('sendForm').click()
  }
 
 
  function deleteChat() {
    document.getElementById('lolbel').click()
  }
  function selectedImage() {
    document.getElementById('imageChat').click()
 
  }
  const selectedHandler = (e) => {
    setFile(e.target.files[0]);
    setMessage('seleccionaste una imagen Face-Job')
    
  };
  

  async function deleteChatComplete(params) {
    const response=await delteChatComversations(infoProfe.email,{"report":params})
    window.location.href="/chat"
  }

  
 

    return(<div className="rightSide-chat">
    <div className="header-chat">
        <div className="imgText-chat" onClick={profileProfessionalChat}>
            <div className="userImg-chat">
                <img src={infoProfe.iconUser} className="cover-chat"/>

            </div>
            <h4>{infoProfe.name} {infoProfe.lastname} <br/> <span>{infoProfe.profession}</span> </h4>
        </div>
        <ul className="nav-icons-chat">
            
        {infoProfe.name!="Face-job" ? ((<><li onClick={workingUser}><ion-icon name="bag-add-outline"></ion-icon>Trabajemos</li>
        <li onClick={deleteChat}><ion-icon name="trash-outline" ></ion-icon></li></>)) : "" }    
        
          
        </ul>
    </div>


    <div className="chatBox-chat">
    {messagesPrivate.map((messa,index)=>(
  
<div key={index}>
{messa.remitente==infoUser.email || messa.remitente=='Face-Job' ? ( <div className="message-chat my_message-chat" >
<p> {messa.tipo=="texto" ? messa.mensaje  : (<img src={messa.link} alt="" />)} <br/> <span>{messa.hora}</span> </p>
        </div>) : (<div className="message-chat client-chat" >
            <p> {messa.tipo=="texto" ? messa.mensaje  : (<img src={messa.link} alt="" />)} <br/> <span>{messa.hora}</span> </p>
        </div>) }
       
</div>


   
))}
 </div>

{infoProfe.name!="Face-job" ? (<form onSubmit={handleSubmit} className='form-chat'>
            <div className="chatbox_input-chat">
            <span onClick={selectedImage}> <ion-icon name="camera-outline"></ion-icon></span>
                <input  autocomplete="off" id='menssagesSendForemojis' type="text" placeholder="Escribe un mensaje" onChange={e=> setMessage(e.target.value)} value={message}  />
                <input type="file" className='form-chat2' id='imageChat' onChange={selectedHandler}/>
          
               <ion-icon name="send-outline" onClick={clickIcon}></ion-icon>  </div>
           <button type='submit' id='sendForm' className='button-chat'></button> 
           </form> ) : (<form onSubmit={handleSubmit} className='form-chat2'>
            <div className="chatbox_input-chat">
              <ion-icon name="camera-outline"></ion-icon>
                <input id='menssagesSendForemojis' type="text" placeholder="Escribe un mensaje" onChange={e=> setMessage(e.target.value)} value={message}  />
               <ion-icon name="send-outline" onClick={clickIcon}></ion-icon>  </div>
           <button type='submit' id='sendForm' className='button-chat'></button> 
           </form> )}   



           <div className="boton2-modal">
            <label htmlFor="btn2-modal" id="lolbel">
              Abrir Modal
            </label>
          </div>
          <input type="checkbox" id="btn2-modal" />
          <div className="container2-modal">
            <div className="content2-modal">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2>Face-job Chat</h2>{" "}
                <span>
                  <label htmlFor="btn2-modal">
                  <ion-icon name="settings-outline"></ion-icon>
                  </label>
                </span>
              </div>

              <p>¿Deseas eliminar este chat ? <br /> ten en cuenta que hay dos opciones con una puedes reportar a un usuario y con la otra solo lo eliminas</p>
              <div className="btn2-cerrar">
               
              <label style={{background:" #d84c4c"}} onClick={()=>deleteChatComplete(1)}> Reportar y eliminar</label>
                  <label style={{ marginLeft: "20px"}} onClick={()=>deleteChatComplete(0)} >
                    Eliminar
                  </label>
              </div>
            </div>
            <label htmlFor="btn2-modal" className="cerrar2-modal"></label>
          </div>





    </div>)
    
}


export default RightSide