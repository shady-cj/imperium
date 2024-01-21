import "./index.scss";
import magicPen from "../../assets/magicpen-yellow.svg";
import stopwatch from "../../assets/stopwatch.svg";
import nftImg from "../../assets/nft-img.jpg";
const index = () => {
    return (
        <section className="benefit-container">
            <div className="benefit-content-header">

                <h6>
                    <img src={magicPen} alt="" />
                    BENEFITS
                </h6>
                <h2>
                    Why work with Us
                </h2>
            </div>
            <div className="benefit-cards">
                <article className="fast-time-card">
                    <div>

                        <h4>
                            Fast Turnaround Time
                        </h4>
                        <p>Make your request and your website will be ready sooner than you can say &quot;pixel perfect&quot;.</p>
                    </div>

                    <div className="time-wrapper">
                        <div>
                            <h5>Weeks</h5>
                            <span>Months</span>
                        </div>
                        <img src={stopwatch} alt="" />
                        <div className="blur-circle"></div>
                    </div>
                </article>
                <article className="responsive-dev">
                    <div className="responsive-dev-content">

                        <h4>
                            Responsive Development
                        </h4>
                        <p>
                            We build website that  will adapt seamlessly to any screen, from desktops to smartphones.
                        </p>
                    </div>
                    <img src={nftImg} alt="" />
                    <div className="blur-circle-2">
                    </div>
                </article>
            </div>

        </section>
    )
}

export default index