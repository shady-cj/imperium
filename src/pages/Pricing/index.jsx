import "./index.scss";
import magicPen from "../../assets/magicpen-yellow.svg";
import PricingCard from "../../components/PricingCard"


const pricingContents = [
    {
        title: "Landing Page from",
        price: "$1828",
        slots: 5,
        packageBenefits: [
            "Landing Page - 1 page website",
            "Custom UI design and development",
            "Responsive web design",
            "Custom Integration",
            "Email Support 5-10pm"
        ]

    },
    {
        title: "Advanced Full Website",
        price: "$3628",
        slots: 3,
        packageBenefits: [
            "Up to 10 pages website",
            "Custom UI design and development",
            "Responsive web design",
            "Custom Integration and CMS",
            "24/7 support"
        ]

    },
    {
        title: "Premium Full Website",
        price: "$4328",
        slots: 3,
        packageBenefits: [
            "Up to 20 pages website",
            "Custom UI design and development",
            "Responsive web design",
            "Custom Integration and CMS",
            "24/7 support"
        ]

    }
]
const index = () => {
    return <section className="pricing-container">
        <div className="pricing-content-header">

            <h6>
                <img src={magicPen} alt="" />
                PRICING
            </h6>
            <h2>
                Select From Our <br /> Offering to <span>Get Started</span>
            </h2>
        </div>
        <div className="pricing-display">
            {
                pricingContents.map(pricing => <PricingCard key={pricing.title} {...pricing} />)
            }
        </div>
    </section>
}

export default index