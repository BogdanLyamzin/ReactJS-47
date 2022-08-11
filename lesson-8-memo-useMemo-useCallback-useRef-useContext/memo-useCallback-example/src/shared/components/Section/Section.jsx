import "./section.css";

const Section = ({title, children})=> {
    return (
        <section className="section">
            <div className="container">
                {title && <h2 className="section-title">{title}</h2>}
                {children}
            </div>
        </section>
    )
}

export default Section;