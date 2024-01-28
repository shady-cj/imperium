import React from "react";
import "./index.scss";
import magicPen from "../../assets/magicpen-yellow.svg";
import stopwatch from "../../assets/stopwatch.svg";
import svgLines1 from "../../assets/svg-lines1.svg";
import svgLines2 from "../../assets/svg-lines2.svg";
import svg100 from "../../assets/svg-100.svg";
import invoice from "../../assets/invoice.svg";
import polygon from "../../assets/polygon.svg";
import { motion, useInView } from "framer-motion";
const BenefitNft = React.lazy(() => import("../../components/BenefitNft"))

const Index = () => {

    const benefitRef = React.useRef(null);
    const benefitInView = useInView(benefitRef);

    return (
        <section id="benefits" ref={benefitRef} className="benefit-container">
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
                <motion.article className="fast-time-card" initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: "spring" }}>
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
                </motion.article>
                <motion.article className="responsive-dev" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: "spring" }}>
                    <div className="responsive-dev-content">

                        <h4>
                            Responsive Development
                        </h4>
                        <p>
                            We build website that  will adapt seamlessly to any screen, from desktops to smartphones.
                        </p>
                    </div>
                    <React.Suspense fallback={<div></div>}>
                        {benefitInView && <BenefitNft />}
                    </React.Suspense>
                    <div className="blur-circle-2">
                    </div>
                </motion.article>
                <motion.article className="loading-time" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: "spring" }}>
                    <img src={svgLines1} alt="" />
                    <img src={svgLines2} alt="" />
                    <div className="lt-upper-rect">
                        <span className="lt-green"></span>
                        <span className="lt-blue"></span>
                        <span className="lt-yellow"></span>
                    </div>
                    <div className="lt-metrics">
                        <div>
                            <img src={svg100} alt="" />
                            <span>Performance</span>
                        </div>
                        <div>
                            <img src={svg100} alt="" />
                            <span>Accessibility</span>
                        </div>
                        <div>
                            <img src={svg100} alt="" />
                            <span>SEO</span>
                        </div>
                    </div>
                    <div className="lt-content">
                        <h2>Fast loading time</h2>
                        <p>Patience is a virtue, but website loading shouldn&rsquo;t test it. We&rsquo;ll make your site load fast, keeping visitors happy.</p>
                    </div>
                </motion.article>
                <motion.article className="revisions" initial={{ opacity: 0, y: -200 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring" }}>
                    <img src={svgLines1} alt="" />
                    <img src={svgLines2} alt="" />
                    <div className="blur-circle-3"></div>
                    <h2>Unlimited Revisions</h2>
                    <p>Tweak until your are satisfied! and of course with  no extra charge</p>
                    <div className="rev-publish-card">
                        <div>
                            <span>Publish</span>
                        </div>
                        <span>You</span>
                        <img src={polygon} alt="" />
                    </div>
                </motion.article>
                <motion.article className="price-tags" initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: "spring" }}>
                    <div className="blur-circle-4"></div>
                    <h2>Quality Work Without the Hefty Price Tag</h2>

                    <p>No need to break the bank for a beautiful website. </p>
                    <div>
                        <div className="pt-upper-rect">
                            <span className="lt-green"></span>
                            <span className="lt-blue"></span>
                            <span className="lt-yellow"></span>
                        </div>
                        <div className="pt-price-content">
                            <div className="pt-starting-from">
                                <img src={invoice} alt="" />
                                <span>starting from</span>
                            </div>
                            <div className="pt-price">
                                <span>
                                    $1828
                                </span>
                                <span>
                                    $30,999
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.article>
            </div>

        </section>
    )
}

export default Index