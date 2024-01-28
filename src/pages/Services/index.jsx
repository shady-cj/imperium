import "./index.scss"
import magicPen from "../../assets/magicpen-blue.svg"
import ServiceCard from "../../components/ServiceCard"
import layerIcon from "../../assets/layer.svg";
import pathIcon from "../../assets/path.svg";
import documentCodeIcon from "../../assets/document-code.svg";





const contents = [
    {
        icon: layerIcon,
        h2Content: "Webflow development",
        pContent: "Webflow magic turns visions into reality, when no code is preferred and the best part? You're in charge of your content. Update a description, add new blog post etc."
    },
    {
        icon: pathIcon,
        h2Content: "UI/UX design",
        pContent: "We craft pixel-perfect designs with Figma, designing experiences that captivate and convert. No clunky layouts, just smooth flows that guide your visitors. "
    },

    {
        icon: documentCodeIcon,
        h2Content: "Web development",
        pContent: "We help convert your UI design into real website using the latest technology - Tailwind, React & Next JS, so that you can focus on growing your business."
    }
]
const index = () => {
    return (
        <section id="services" className="service-container">
            <div className="service-content-header">

                <h6>
                    <img src={magicPen} alt="" />
                    SERVICES
                </h6>
                <h2>
                    We don&apos;t just Build Website, <br />
                    We Craft <span>Experiences</span>

                </h2>
            </div>

            <div className="section-cards">
                {contents.map(content => <ServiceCard key={content.h2Content} {...content} />)}
            </div>

        </section>
    )
}

export default index