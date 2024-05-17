
type PanelProps = {
    title: string
}


const Panel = ({title}: PanelProps) => {
    return(
        <section>
            <h1>{title}</h1>
        </section>
    )
}

export default Panel