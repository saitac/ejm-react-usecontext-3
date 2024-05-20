import { ReactNode, useContext } from "react"
import { ThemeContext } from "../Context/Context"

type PanelProps = {
    title: string,
    children: ReactNode
}


const Panel = ({title, children}: PanelProps) => {
    const theme = useContext(ThemeContext);
    const classname = 'panel-'+theme;
    return(
        <section className={classname}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

export default Panel