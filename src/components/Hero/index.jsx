import "./index.scss"
import arrowLeft from "../../assets/arrow-left.svg"
import bobPics from "../../assets/bob-pics.jpg";
import heroImg from "../../assets/hero-img.png";
import heroVid from "../../assets/hero-vid.mp4";
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
                <div>
                    <a className="start-a-project">Start a Project <img src={arrowLeft} alt="" /></a>
                    <a className="schedule-a-call">Schedule a Call</a>
                </div>
                <div className="hero-testimony-section">
                    <img src={bobPics} alt="" />
                    <div className="hero-testimony-info">
                        <span>Bob Robson, Owner @Enver Flooring</span>
                        <span>Their design magic transformed our website into a conversion machine! We saw a 20% increase in sales within 3 months.</span>
                    </div>
                </div>
            </div>

            <div className="hero-video">
                <video muted loop autoPlay poster={heroImg}>
                    <source src={heroVid} type="video/mp4" />
                </video>
            </div>

        </div>
    )
}

export default index