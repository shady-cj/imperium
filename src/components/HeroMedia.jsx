
import heroVid from "../assets/hero-vid.mp4";
import mobileHeroImg from "../assets/mobile-hero-img.jpg";
const HeroMedia = () => {
    return (
        <>
            <video className="hero-video" muted loop autoPlay>
                <source src={heroVid} type="video/mp4" />
            </video>
            <img className="hero-img" src={mobileHeroImg} alt="" />
        </>
    )
}

export default HeroMedia