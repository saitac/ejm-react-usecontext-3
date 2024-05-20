import { createContext, Dispatch } from "react"
import { ClsUser } from "../Class/Class";


type CurrentUserContextProps = {
    currentUser: ClsUser,
    setCurrentUser: Dispatch<React.SetStateAction<ClsUser>>
}

const ThemeContext = createContext<string|null>(null);
const CurrentUserContext = createContext<CurrentUserContextProps>(null!);

export {
    ThemeContext,
    CurrentUserContext
}