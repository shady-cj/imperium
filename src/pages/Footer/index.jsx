import "./index.scss";
import mail from "../../assets/mail.svg";
import navigation from "../../assets/navigation.svg";
import call from "../../assets/call.svg";
import path from "../../assets/path.svg";
const index = () => {
    return (
        <section id="footer" className="footer-container">
            <div className="footer-subsection footer-contact">
                <div>
                    <img src={call} alt="" />

                </div>
                <p>Want to make sure we&rsquo;re the right fit? Schedule a discovery call!</p>
                <a href="https://calendly.com/imperiumdesignsinfo-e3u/30min" target="_blank" rel="noreferrer">Schedule a Call</a>
            </div>
            <div className="footer-subsection footer-navigation">
                <div>
                    <img src={navigation} alt="" />

                </div>
                <h2>Navigation</h2>
                <div className="footer-flex">
                    <span>Services</span>
                    <span>Why Us</span>
                    <span>Project</span>
                    <span>Pricing</span>
                    <span>Process</span>
                </div>
            </div>
            <div className="footer-subsection footer-mail">
                <div>
                    <img src={mail} alt="" />
                </div>
                <h2>Contact Us</h2>
                <p>
                    info@imperiumdesigns.ca
                </p>
                <a href="https://calendly.com/imperiumdesignsinfo-e3u/30min" target="_blank" rel="noreferrer">Schedule a Call</a>
            </div>
            <div className="footer-subsection footer-creators">
                <div>
                    <img src={path} alt="" />

                </div>
                <h2>Made with love by</h2>
                <div className="footer-flex">
                    <span>Tiago - Owner</span>
                    <span>Praise - UI Designer / Web Developer</span>
                </div>
            </div>


        </section>
    )
}

export default index