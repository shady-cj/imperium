import "./index.scss"
import React, { Suspense, useRef } from "react";
import { useInView } from "framer-motion";
import arrowLeft from "../../assets/arrow-left.svg"
import bobPics from "../../assets/bob-pics.jpg";
import heroImg from "../../assets/hero-img.png";

import { motion } from "framer-motion";
const HeroMedia = React.lazy(() => import("../HeroMedia"));
const Index = () => {
    const frameRef = useRef(null);
    const frameInView = useInView(frameRef, { once: true });

    return (
        <div className="hero-container">
            <div className="hero-heading__text">
                <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", delay: 1 }}>
                    Your Trusted Agency
                </motion.h3>
                <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", delay: 1 }}>
                    for Crafting Websites
                </motion.h3>
                <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", delay: 1 }}>
                    that Converts
                </motion.h3>
            </div>
            <div className="hero-paragraph__text">
                <p>Taking charge of both design and development, we craft websites <br /> that convert like spells without the hefty price tag.</p>
            </div>
            <div className="hero-contact">
                <div>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd7IGXHI_XiZ366iWfWm2KgbuBWL4hWtvXw5F2S0_D9FZPBPA/viewform" target="_blank" rel="noreferrer" className="start-a-project">Start a Project <img src={arrowLeft} alt="" /></a>
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

            <div className="hero-display" ref={frameRef}>
                <Suspense fallback={<img src={heroImg} />}>
                    {
                        frameInView && <HeroMedia />

                    }
                </Suspense>

            </div>

        </div>
    )
}

export default Index