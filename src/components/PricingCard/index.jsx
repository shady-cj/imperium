import "./index.scss"
import tick from "../../assets/tick.svg";
import arrowLeft from "../../assets/arrow-left.svg";
import { motion } from 'framer-motion';
const index = ({ title, price, slots, packageBenefits }) => {
    return (
        <motion.article className="pricing-card" initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }}>
            <div className="pricing-card-title">
                <div>
                    <h4>{title}</h4>
                    <span>{price}</span>
                </div>
                <div>
                    <span></span>
                    <span>{slots} slots left</span>
                </div>
            </div>
            <p>
                Landing page that converts and appeal to your customers giving your business a strong digital presence.
            </p>
            <div className="pricing-package">
                <h6>What you will get</h6>
                <div className="pricing-package-benefit">
                    {packageBenefits?.map(pb => {
                        return <div key={pb}>
                            <span><img src={tick} alt="" /></span>
                            <span>{pb}</span>
                        </div>
                    })}

                </div>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSd7IGXHI_XiZ366iWfWm2KgbuBWL4hWtvXw5F2S0_D9FZPBPA/viewform" target="_blank" rel="noreferrer">
                Start a Project
                <img src={arrowLeft} alt="" />
            </a>
        </motion.article>
    )
}

export default index