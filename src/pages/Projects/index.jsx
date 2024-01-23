import "./index.scss";
import magicPen from "../../assets/magicpen-blue.svg";
import ProjectCard from "../../components/ProjectCard";
import epicEats from "../../assets/epiceats.jpg";
import valueIndustry from "../../assets/value-industry.jpg";
import nftsvg from "../../assets/nftsvg.svg";


const projectContents = [
    {
        title: "Value Industry",
        description: "UI design concept for an ecommerce website. The concept focuses on providing a valuable experience for users by making it easy to find the information and products they need.",
        tags: ["UI Design", "UX Design"]
    },
    {
        title: "EpicEats",
        description: "UI design exploration of a food ordering and delivery app for EpicEats, a restaurant.",
        tags: ["UI Design", "UX Design"]
    },
    {
        title: "NFT Dashboard",
        description: "UI design concept for a NFT marketplace Dashboard.",
        tags: ["UI Design", "UX Design"]
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
                <div className="project-display-card">
                    <ProjectCard tags={projectContents[0].tags} title={projectContents[0].title} description={projectContents[0].description} />
                    <img src={valueIndustry} alt="" loading="lazy" />
                </div>
                <div className="project-display-card">
                    <img src={epicEats} alt="" />
                    <ProjectCard tags={projectContents[1].tags} title={projectContents[1].title} description={projectContents[1].description} />

                </div>
                <div className="project-display-card">
                    <ProjectCard tags={projectContents[2].tags} title={projectContents[2].title} description={projectContents[2].description} />
                    <img src={nftsvg} alt="" />
                </div>

            </div>
        </section>
    )
}

export default index