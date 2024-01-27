import "./index.scss"
import arrowUp from "../../assets/arrow-up-left.svg";
import { motion } from "framer-motion";

const index = ({ icon, h2Content, pContent }) => {
  return (
    <motion.article className="service-card" initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring" }}>
      <div>

        <div className="card-icon">
          <img src={icon} />
        </div>

        <div className="card-content">
          <h2>{h2Content}</h2>
          <p>{pContent}</p>
        </div>
      </div>

      <a href="https://forms.gle/5L2KBSWd5mmQKgEZ8" target="_blank" rel="noreferrer">
        <span>
          Start a Project
        </span>
        <div>

          <img src={arrowUp} alt="" />
        </div>

      </a>

    </motion.article>
  )
}

export default index