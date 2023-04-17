import LeftSide from '../components/Chat/LeftSide'
import RightSide from '../components/Chat/RightSide'
import { useContext } from 'react'
import { contextUser } from '../Hooks/userContext'
function Chat() {
const context=useContext(contextUser)
   return(<section className="chat-section">
    <div className="container-chat">
        <LeftSide  text={{text:context.soket}}/>
        <RightSide text={{text:context.soket}}/>     
        </div>
   
  
</section> ) 
}


export default Chat