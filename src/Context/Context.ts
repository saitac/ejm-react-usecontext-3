import { createContext } from "react"
import { ClsUser } from "../Class/Class";


const ThemeContext = createContext<string|null>(null);
const CurrentUserContext = createContext<ClsUser|null>(null);

export {
    ThemeContext,
    CurrentUserContext
}