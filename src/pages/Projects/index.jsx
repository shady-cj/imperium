import "./index.scss";
import magicPen from "../../assets/magicpen-blue.svg";
import ProjectCard from "../../components/ProjectCard";
import React from "react";
import { motion, useInView } from "framer-motion"

const ProjectImages = React.lazy(() => import("../../components/ProjectImages"));

const projectContents = [
    {
        title: "Value Industry",
        description: "UI design concept for an ecommerce website. The concept focuses on providing a valuable experience for users by making it easy to find the information and products they need.",
        tags: ["UI Design", "UX Design"],
        link: "https://www.behance.net/gallery/177643947/UI-Design-Concept-for-Engineering-Equipment-website"
    },
    {
        title: "EpicEats",
        description: "UI design exploration of a food ordering and delivery app for EpicEats, a restaurant.",
        tags: ["UI Design", "UX Design"],
        link: "https://www.behance.net/gallery/176594443/EpicEats-Redefining-the-food-ordering-experience"
    },
    {
        title: "NFT Dashboard",
        description: "UI design concept for a NFT marketplace Dashboard.",
        tags: ["UI Design", "UX Design"],
        link: "https://www.behance.net/gallery/177129773/NFT-marketplace-dashboard"
    }
]
const Index = () => {
    const projectRef = React.useRef(null);
    const projectInView = useInView(projectRef);
    return (
        <section id="projects" className="project-container" ref={projectRef}>
            <div className="project-content-header">
                <h6>
                    <img src={magicPen} alt="" />
                    PROJECTS
                </h6>
                <h2>
                    Explore our portfolio <br /> of work
                </h2>
            </div>
            <div className="project-display">
                <motion.div className="project-display-card" transition={{ staggerChildren: 0.5 }}>
                    <ProjectCard tags={projectContents[0].tags} title={projectContents[0].title} description={projectContents[0].description} link={projectContents[0].link} />
                    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <React.Suspense fallback={<div></div>}>
                            {projectInView && <ProjectImages title={projectContents[0].title} />}
                        </React.Suspense>
                    </motion.div>
                </motion.div>
                <motion.div className="project-display-card" transition={{ staggerChildren: 0.5 }}>
                    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <React.Suspense fallback={<div></div>}>
                            {projectInView && <ProjectImages title={projectContents[1].title} />}
                        </React.Suspense>
                    </motion.div>

                    <ProjectCard tags={projectContents[1].tags} title={projectContents[1].title} description={projectContents[1].description} link={projectContents[1].link} />

                </motion.div>
                <motion.div className="project-display-card" transition={{ staggerChildren: 0.5 }}>
                    <ProjectCard tags={projectContents[2].tags} title={projectContents[2].title} description={projectContents[2].description} link={projectContents[2].link} />
                    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <React.Suspense fallback={<div></div>}>
                            {projectInView && <ProjectImages title={projectContents[2].title} />}
                        </React.Suspense>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    )
}

export default Index