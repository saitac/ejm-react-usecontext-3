
import { useContext } from "react"
import Panel from "./Panel"
import { CurrentUserContext } from "../Context/Context"
import Greeting from "./Greeting";
import LoginForm from "./LoginForm";

const WelcomePanel = () => {

    const {currentUser} = useContext(CurrentUserContext);
    
    return(
        <Panel title="Bienvenido">
            {currentUser.nombre.trim() !== "" ? <Greeting/> : <LoginForm/>}
        </Panel>
    )
}

export default WelcomePanel