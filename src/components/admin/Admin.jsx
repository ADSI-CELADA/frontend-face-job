import Cookies from 'universal-cookie'
import { reports,solucion,messagesUsers } from '../../api/api';
import { useEffect, useState } from 'react';

function Admin() {
   
    const cookies=new Cookies();
    const [resports,setReports]=useState([])
    const [changeBoolean,setChangeBoolean]=useState(false)
    const [razon,setRazon]=useState('')
    const [changes,setChanges]=useState()
    const [chat,setchat]=useState(true)
    const [messages,setMessages]=useState([])
    const [userDefault,setuserDefault]=useState('')
useEffect(()=>{
    async function loadReports() {
       const response=await reports()
       if (response.data[0].email_remitente) {
        setReports(response.data)
        setChangeBoolean(true)
       }else{
        setChangeBoolean(false)
       } 
       
    }
    loadReports()
},[changes])

function openRazon(params) {
    setRazon(params)
    document.getElementById('lolbel').click()
}
const closeSesion=()=>{
    cookies.remove('token',{path:"/"})
    window.location.href="/"
    }
const solucionReport=async(reporteEmail,reportadoEmail,idReport)=>{
    if (idReport && reportadoEmail && reporteEmail) {
        const formdata=new FormData()
        formdata.append('email_reporte',reporteEmail)
        formdata.append('email_reportado',reportadoEmail)
        formdata.append('id',idReport)
        const response=await solucion(formdata)
        setChanges(response)
    }
}
async function seeChatUsers(reporteEmail,reportadoEmail) {
    if (reporteEmail && reportadoEmail) {
 
        const formdata=new FormData
        formdata.append('email_reporte',reporteEmail)
        formdata.append('email_reportado',reportadoEmail)
       const response=await messagesUsers(formdata)
       setMessages(response.data)
       setuserDefault(reporteEmail)
       setchat(false)
    }
}
const changeInterface=()=>{
    setuserDefault('face-job') 
    setchat(true)
}
function reLoad() {
    let number=Math.random*10
    setChanges([{data:number}])
}
    return(
       <>
      
       {chat ? (
        <>
        <section className="admin-section">
        <div>
        <h1>Administración De Reportes <span className="admin-logOut" ><i className='bx bx-log-out bx-sm bx-border-circle'  onClick={closeSesion}></i> <p style={{marginLeft:"15px"}}>  </p> <i className='bx bx-revision  bx-sm bx-border-circle' onClick={reLoad}></i></span></h1>
        <span className="admin-infoReport">
            <p className="admin-Reporte-margin">Reporte</p>
            <p className="admin-Reportado-margin">Usuario Reportado</p>
            <p className="admin-Razones-margin">Razones</p>
            <p className="admin-chast-margin">Chats</p>
            
        </span>
        <section className="admin-reports">
       {/* --------------- */}
       {changeBoolean ? resports.map((report)=>(
        <section className="admin-reportUsers" key={report.id_reporte}>
          
        <p className='admin-emails'>{report.email_remitente}</p>
        <p  className='admin-emails'>{report.reportado_email}</p>
        <p className="admin-pointer " onClick={()=>openRazon(report.razon)}>Ver Razon <i className='bx bxs-folder'></i></p>
        <p className="admin-pointer " onClick={()=>seeChatUsers(report.email_remitente,report.reportado_email)}>Ver Chat <i className='bx bx-chat'></i></p>
        <button className="admin-buttons" onClick={()=>solucionReport(report.email_remitente,report.reportado_email,report.id_reporte)}>Solucionado</button>
        <button className="admin-buttons2">Eliminar</button>
        </section>
       )) : "no hay reportes"}
       
       {/* --------------------------- */}
             
   </section>

  
        </div>
        
       
      
    </section>
    <div className="boton2-modal">
        <label htmlFor="btn2-modal" id="lolbel">
          Abrir Modal
        </label>
      </div>
      <input type="checkbox" id="btn2-modal" />
      <div className="container2-modal">
        <div className="content2-modal">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Face-job Administrador</h2>{" "}
            <span>
              <label htmlFor="btn2-modal">
              <ion-icon name="settings-outline"></ion-icon>
              </label>
            </span>
          </div>

          <p>Razon: <br />{razon}</p>
          <div className="btn2-cerrar">
           
         
          </div>
        </div>
        <label htmlFor="btn2-modal" className="cerrar2-modal"></label>
      </div></>
       ) : ( <section className="chat-section">
       <div className="container-chat">
       <div className="rightSide-chat">
       <div className="header-chat">
           <div className="imgText-chat" onClick={changeInterface}>
               <div className="userImg-chat">
                   <img src="" className="cover-chat"/>
   
               </div>
               <h4>Administracion <br/> <span>Admin</span> </h4>
           </div>
           <ul className="nav-icons-chat">
     
               
               <li onClick={changeInterface}>Volver</li>
            
             
           </ul>
       </div>
   
   
       <div className="chatBox-chat">
       
   {userDefault!='face-job' ? (<>
    {messages.map((messa,index)=>(
  
  <div key={index}>
  {messa.remitente==userDefault  ? ( <div className="message-chat my_message-chat" >
  <p> {messa.tipo=="texto" ? messa.mensaje  : (<img src={messa.link} alt="" />)} <br/> <span>{messa.hora}</span> </p>
          </div>) : (<div className="message-chat client-chat" >
              <p> {messa.tipo=="texto" ? messa.mensaje  : (<img src={messa.link} alt="" />)} <br/> <span>{messa.hora}</span> </p>
          </div>) }
         
  </div>
  
  
     
  ))}
   </>): ""}  
   
    </div>
       </div>
           </div>
   </section>)} 
        </>
        
    )
}


export default Admin