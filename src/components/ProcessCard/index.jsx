import "./index.scss"
const index = ({ step, title, desc }) => {
    return (
        <article className="process-card">

            <div className="step">
                <span></span>
                <span>Step {step}</span>
            </div>
            <h2>
                {title}
            </h2>
            <p>{desc}</p>
        </article>
    )
}

export default index