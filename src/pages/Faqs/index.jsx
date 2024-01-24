import "./index.scss";
import magicPen from "../../assets/magicpen-yellow.svg";
import FaqsBox from "../../components/FaqsBox";
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
                <FaqsBox />
                <FaqsBox />
                <FaqsBox />
                <FaqsBox />
                <FaqsBox />
                <FaqsBox />
            </div>
        </section>
    )
}

export default index