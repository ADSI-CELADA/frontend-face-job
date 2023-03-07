import {Router} from "./routers/Router"
import ContextUserData from "./assets/context/usercContext";
export default function App() {
 
  return (
      <ContextUserData>
        <Router />
      </ContextUserData>
      
    
   
  );
}
