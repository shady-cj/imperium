import "./index.scss"
import arrowUp from "../../assets/arrow-up-left.svg";


const index = ({ icon, h2Content, pContent }) => {
  return (
    <article className="service-card">
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

    </article>
  )
}

export default index