import "./index.scss"
import arrowLeft from "../../assets/arrow-left.svg"
import bobPics from "../../assets/bob-pics.jpg";
import heroImg from "../../assets/hero-img.png";
import heroVid from "../../assets/hero-vid.mp4";
import mobileHeroImg from "../../assets/mobile-hero-img.jpg";
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
                    <a href="https://forms.gle/5L2KBSWd5mmQKgEZ8" target="_blank" rel="noreferrer" className="start-a-project">Start a Project <img src={arrowLeft} alt="" /></a>
                    <a href="https://calendly.com/imperiumdesignsinfo-e3u/30min" target="_blank" rel="noreferrer" className="schedule-a-call">Schedule a Call</a>
                </div>
                <div className="hero-testimony-section">
                    <img src={bobPics} loading="lazy" alt="Bob" />
                    <div className="hero-testimony-info">
                        <span>Bob Robson, Owner @Enver Flooring</span>
                        <span>Their design magic transformed our website into a conversion machine! We saw a 20% increase in sales within 3 months.</span>
                    </div>
                </div>
            </div>

            <div className="hero-display">
                <video className="hero-video" muted loop autoPlay poster={heroImg}>
                    <source src={heroVid} type="video/mp4" />
                </video>
                <img className="hero-img" src={mobileHeroImg} alt="" />
            </div>

        </div>
    )
}

export default index