import LeftSide from '../Chat/LeftSide'
import RightSide from '../Chat/RightSide'
import { useContext } from 'react'
import { contextUser } from '../../Hooks/userContext'

export const ContainerChat = () => {
    const context=useContext(contextUser)
  return (
    <section className="chat-box">
            <LeftSide  text={{text:context.soket}}/>
            <RightSide text={{text:context.soket}}/>
    </section>
  )
}
