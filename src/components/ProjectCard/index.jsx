import "./index.scss"


const index = ({ tags, title, description, link }) => {
    return (
        <article className="project-card-container">
            <div className="project-info">

                <div className="project-tags">
                    {tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-content">
                    <h4>{title}</h4>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">Read Case Study</a>

        </article>
    )
}

export default index