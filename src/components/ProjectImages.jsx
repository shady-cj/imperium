
import epicEats from "../assets/epiceats.jpg";
import valueIndustry from "../assets/value-industry.jpg";
import nftsvg from "../assets/nftsvg.svg";

const ProjectImages = ({ title }) => {
    const mapImg = {
        "Value Industry": valueIndustry,
        "EpicEats": epicEats,
        "NFT Dashboard": nftsvg

    }
    return (
        <img src={mapImg[title]} alt="" loading="lazy" />
    )
}

export default ProjectImages