import { useContext, useState, Dispatch } from "react"
import { CurrentUserContext } from "../Context/Context"
import { ClsUser } from "../Class/Class"
import Button from "./Button";

const LoginForm = () => {

    const {setCurrentUser} = useContext(CurrentUserContext);

    const [localCurrentUser, setLocalCurrentUser] = useState<ClsUser>(new ClsUser("",""));
    const canLogin: boolean = localCurrentUser.nombre.trim() !== "" && localCurrentUser.apellido.trim() !== "";
    
    const userNombreHandleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalCurrentUser(new ClsUser(e.target.value, localCurrentUser.apellido));
    }

    const userApellidoHandleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalCurrentUser(new ClsUser(localCurrentUser.nombre, e.target.value));
    }

    return(
        <>
            <label>
                Nombre{": "}
                <input
                    required
                    value={localCurrentUser.nombre}
                    onChange={(e) => userNombreHandleOnChange(e)}
                />
            </label>
            <label>
                Apellido{": "}
                <input
                    required
                    value={localCurrentUser.apellido}
                    onChange={(e) => userApellidoHandleOnChange(e)}
                />
            </label>
            <Button
                disabled = {!canLogin}
                onClick = { () => { setCurrentUser(localCurrentUser)} }
            >
                Iniciar sesión
            </Button>
            {!canLogin && <i>Llena ambos campos.</i>}
        </>
    )
}

export default LoginForm