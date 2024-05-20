import { useContext } from "react"
import { CurrentUserContext } from "../Context/Context"

const Greeting = () => {
    const {currentUser} = useContext(CurrentUserContext)
    return(
        <>
            <p>Iniciaste sesión como {currentUser.nombre}.</p>
        </>
    )
}

export default Greeting