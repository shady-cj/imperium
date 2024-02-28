import "./index.scss";
import magicPen from "../../assets/magicpen-blue.svg"
import ProcessCard from "../../components/ProcessCard";
import star from "../../assets/star.svg";
import arrowLeft from "../../assets/arrow-left.svg";
import { motion } from "framer-motion";

const processes = [
    {
        step: 1,
        title: "Discovery & Brainstorming",
        desc: "We dive deep into your vision, goals, and target audience, forming the foundation for your website's success. Think of it as a brainstorm party with pixel sprinkles!"
    },
    {
        step: 2,
        title: "Visual Design",
        desc: "We then transform your ideas into stunning designs, crafting the perfect user experience before a single line of code is written. (Spoiler alert: it'll be beautiful!)"
    },
    {
        step: 3,
        title: "Development",
        desc: "At this stage, Our developers bring your designs to life, line by line, pixel by pixel."
    },
    {
        step: 4,
        title: "Revision & Launch",
        desc: "Before launching, the finalized website will go through quality assurance to ensure that every detail is just right."
    },
    {
        step: 5,
        title: "Maintenance",
        desc: "we're not just one-and-done! We offer ongoing support and maintenance so that your website is always at its best."
    }
]
const index = () => {
    return (
        <motion.section id="process" className="process-container" initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", ease: "linear", duration: 0 }}>
            <div className="blur-circle-6"></div>
            <div className="process-content-header">

                <h6>
                    <img src={magicPen} alt="" />
                    PROCESS
                </h6>
                <h2>A Look at How We Bring <span>Your Vision to Life</span>
                </h2>
            </div>
            <div className="process-cards">
                <div className="process-card-section-1">
                    <ProcessCard step={processes[0].step} title={processes[0].title} desc={processes[0].desc} />
                    <ProcessCard step={processes[1].step} title={processes[1].title} desc={processes[1].desc} />
                    <div className="process-misc">
                        <div>

                            <div className="publish-header">
                                <span>Publish</span>
                            </div>
                            <div className="circle-svg"></div>
                            <img src={star} alt="" />
                        </div>

                    </div>
                    <div className="process-publish-display mobile-view">
                        <div>
                            <div className="publish-header">
                                <span>Publish</span>
                            </div>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd7IGXHI_XiZ366iWfWm2KgbuBWL4hWtvXw5F2S0_D9FZPBPA/viewform" target="_blank" rel="noreferrer">Start a Project <img src={arrowLeft} alt="" /></a>

                        </div>
                        <div className="blur-circle-5"></div>
                    </div>
                </div>
                <div className="process-card-section-2">
                    <div className="process-publish-display">
                        <div>
                            <div className="publish-header">
                                <span>Publish</span>
                            </div>
                            <a href="https://forms.gle/5L2KBSWd5mmQKgEZ8" target="_blank" rel="noreferrer">Start a Project <img src={arrowLeft} alt="" /></a>

                        </div>
                        <div className="blur-circle-5"></div>
                    </div>
                    <ProcessCard step={processes[2].step} title={processes[2].title} desc={processes[2].desc} />
                    <ProcessCard step={processes[3].step} title={processes[3].title} desc={processes[3].desc} />
                    <div className="process-misc mobile-view">
                        <div>

                            <div className="publish-header">
                                <span>Publish</span>
                            </div>
                            <div className="circle-svg"></div>
                            <img src={star} alt="" />
                        </div>

                    </div>
                    <ProcessCard step={processes[4].step} title={processes[4].title} desc={processes[4].desc} />
                </div>
            </div>
        </motion.section>
    )
}

export default index