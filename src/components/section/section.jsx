import './section.css'

const Section = ({title,children}) => 
{
    return ( <section className="section">
        {title && <h2 className="title">{title}</h2>}
        <div className="section-container">{children}</div>
    </section>)
}
export default Section;