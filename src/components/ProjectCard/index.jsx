import "./index.scss"
import { motion } from "framer-motion"

const index = ({ tags, title, description, link }) => {
    return (
        <motion.article className="project-card-container" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
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

        </motion.article>
    )
}

export default index