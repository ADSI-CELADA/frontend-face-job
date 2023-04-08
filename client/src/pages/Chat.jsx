import LeftSide from '../components/Chat/LeftSide'
import RightSide from '../components/Chat/RightSide'
import io from 'socket.io-client'


const soket=io('http://localhost:4000')
function Chat() {

   return(<section className="chat-section">
    <div className="container-chat">
        <LeftSide  text={{text:soket}}/>
        <RightSide text={{text:soket}}/>     
        </div>
   
  
</section> ) 
}


export default Chat