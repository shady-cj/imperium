import "./index.scss";
import magicPen from "../../assets/magicpen-yellow.svg";
import FaqsBox from "../../components/FaqsBox";

const faqs = [
    {
        question: "What services do you offer exactly?",
        answer: ""
    },
    {
        question: "How long does it take to build a website?",
        answer: ""
    },
    {
        question: "What if I need changes after my website is live?",
        answer: ""
    },
    {
        question: "Do you have pricing packages? I'm on a tight budget.",
        answer: ""
    },
    {
        question: "What happens after my website is launched?",
        answer: ""
    },
    {
        question: "What kind of support do you offer?",
        answer: ""
    },
]
const index = () => {
    return (
        <section className="faqs-container">
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