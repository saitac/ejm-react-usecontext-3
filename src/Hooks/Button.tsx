import { ReactNode, useContext, MouseEventHandler } from "react"
import { ThemeContext } from "../Context/Context"

type ButtonProps = {
    children: ReactNode,
    disabled: boolean,
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Button = ( {children, disabled, onClick}: ButtonProps ) => {
    
    const theme: null | string = useContext(ThemeContext);
    const classname = "button-" + theme;

    return(
        <button
            className={classname}
            disabled = {disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button