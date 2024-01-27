import "./index.scss";
import magicPen from "../../assets/magicpen-blue.svg";
import ProjectCard from "../../components/ProjectCard";
import epicEats from "../../assets/epiceats.jpg";
import valueIndustry from "../../assets/value-industry.jpg";
import nftsvg from "../../assets/nftsvg.svg";
import { motion } from "framer-motion"


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
const index = () => {
    return (
        <section className="project-container">
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
                        <img src={valueIndustry} alt="" loading="lazy" />
                    </motion.div>
                </motion.div>
                <motion.div className="project-display-card" transition={{ staggerChildren: 0.5 }}>
                    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>

                        <img src={epicEats} alt="" loading="lazy" />
                    </motion.div>

                    <ProjectCard tags={projectContents[1].tags} title={projectContents[1].title} description={projectContents[1].description} link={projectContents[1].link} />

                </motion.div>
                <motion.div className="project-display-card" transition={{ staggerChildren: 0.5 }}>
                    <ProjectCard tags={projectContents[2].tags} title={projectContents[2].title} description={projectContents[2].description} link={projectContents[2].link} />
                    <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <img src={nftsvg} alt="" loading="lazy" />
                    </motion.div>

                </motion.div>

            </div>
        </section>
    )
}

export default index