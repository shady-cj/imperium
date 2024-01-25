import "./index.scss";
import plus from "../../assets/plus.svg";

const index = ({ question, answer }) => {
    return (

        <article className="question-box">
            <p>{question}</p>
            <img src={plus} alt="" />
            <div className="answer-box">

            </div>
        </article>

    )
}

export default index