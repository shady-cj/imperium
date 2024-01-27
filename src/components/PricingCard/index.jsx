import "./index.scss"
import tick from "../../assets/tick.svg";
import arrowLeft from "../../assets/arrow-left.svg";
const index = ({ title, price, slots, packageBenefits }) => {
    return (
        <article className="pricing-card">
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
            <a href="https://forms.gle/5L2KBSWd5mmQKgEZ8" target="_blank" rel="noreferrer">
                Start a Project
                <img src={arrowLeft} alt="" />
            </a>
        </article>
    )
}

export default index