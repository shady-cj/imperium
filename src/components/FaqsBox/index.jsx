import "./index.scss";
import { useState } from "react";
import plus from "../../assets/plus.svg";
import closeIcon from "../../assets/close-icon.svg";
import { motion } from "framer-motion"
const Index = ({ question, answer }) => {
    const [boxOpened, setBoxOpened] = useState(false);
    return (

        <article className={`question-box`}>
            <div>

                <p>{question}</p>
                <img src={boxOpened ? closeIcon : plus} alt="" onClick={() => setBoxOpened(prev => !prev)} />
            </div>
            <motion.div initial={{ height: "0rem" }} animate={boxOpened ? { height: "11.5rem" } : { height: "0rem" }} transition={{ type: "spring", ease: "ease-in-out" }}>

                <div className={`answer-box`}>
                    {answer}
                </div>
            </motion.div>

        </article>

    )
}

export default Index
