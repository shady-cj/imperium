
import epicEats from "../assets/epiceats.jpg";
import valueIndustry from "../assets/value-industry.jpg";
import nft from "../assets/nft-marketplace.jpg";

const ProjectImages = ({ title }) => {
    const mapImg = {
        "Value Industry": valueIndustry,
        "EpicEats": epicEats,
        "NFT Dashboard": nft

    }
    return (
        <img src={mapImg[title]} alt="" loading="lazy" />
    )
}

export default ProjectImages