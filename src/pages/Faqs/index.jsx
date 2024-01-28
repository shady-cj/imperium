import "./index.scss";
import magicPen from "../../assets/magicpen-yellow.svg";
import FaqsBox from "../../components/FaqsBox";

const faqs = [
    {
        question: "What services do you offer exactly?",
        answer: "We offer UI/UX design, web development both frontend and backend development, Webflow development as well as website maintenance."
    },
    {
        question: "How long does it take to build a website?",
        answer: "Typically, it takes us 3-6 weeks to launch a website, although this may vary depending on the project. We'll work closely with you to understand your needs and create a timeline that fits your schedule."
    },
    {
        question: "What if I need changes after my website is live?",
        answer: "No problem! We offer unlimited revisions, so you can tweak and perfect your website until it's exactly what you envisioned. We're not happy until you're happy, so don't be shy about asking for adjustments!"
    },
    {
        question: "Do you have pricing packages? I'm on a tight budget.",
        answer: "We understand that every business has different needs and budgets. That's why we offer flexible pricing options to fit your unique project scope. We're always upfront about costs, so there are no surprises down the road."
    },
    {
        question: "What happens after my website is launched?",
        answer: "We offer ongoing support and maintenance to keep your website running smoothly and securely for an affordable fee per month. "
    },
    {
        question: "What kind of support do you offer?",
        answer: `We offer comprehensive after-launch support, including:
Regular website maintenance and updates, Security monitoring and protection,
        Content updates and revisions,
        Technical support and troubleshooting.`
    },
]
const index = () => {
    return (
        <section id="faqs" className="faqs-container">
            <div className="faqs-content-header">

                <h6>
                    <img src={magicPen} alt="" />
                    FREQUENTLY ASKED QUESTIONS
                </h6>
                <h2>
                    Still have a question?
                </h2>
                <p>
                    Feel free to reach out to us, and we&rsquo;ll be happy to answer any questions you still have!
                </p>
            </div>
            <div className="question-box-container">
                {faqs.map(f => <FaqsBox key={f.question} {...f} />)}
            </div>
        </section>
    )
}

export default index