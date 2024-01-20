import "./index.scss"
import arrowLeft from "../../assets/arrow-left.svg"
const index = () => {
    return (
        <div className="hero-container">
            <div className="hero-heading__text">
                <h3>
                    Your Trusted Agency
                </h3>
                <h3>
                    for Crafting Websites
                </h3>
                <h3>
                    that Converts
                </h3>
            </div>
            <div className="hero-paragraph__text">
                <p>Taking charge of both design and development, we craft websites <br /> that convert like spells without the hefty price tag.</p>
            </div>
            <div className="hero-contact">
                <a className="start-a-project">Start a Project <img src={arrowLeft} alt="" /></a>
                <a className="schedule-a-call">Schedule a Call</a>
            </div>

        </div>
    )
}

export default index