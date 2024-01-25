import "./index.scss";
import { useState } from "react";
import plus from "../../assets/plus.svg";
import closeIcon from "../../assets/close-icon.svg";
const Index = ({ question, answer }) => {
    const [boxOpened, setBoxOpened] = useState(false);
    return (

        <article className={`question-box ${boxOpened ? "opened" : "closed"}`}>
            <div>

                <p>{question}</p>
                <img src={boxOpened ? closeIcon : plus} alt="" onClick={() => setBoxOpened(prev => !prev)} />
            </div>

            <div className={`answer-box`}>
                {answer}
            </div>
        </article>

    )
}

export default Index