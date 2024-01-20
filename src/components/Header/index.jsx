import "./index.scss"
import logo from "../../assets/logo.svg";

const index = () => {
    return (

        <header>
            <div className="logo-wrapper">
                <img src={logo} className="logo" alt="" />
                <span>Imperium</span>
            </div>
            <nav>
                <a href="">Services</a>
                <a href="">Why Us</a>
                <a href="">Project</a>
                <a href="">Pricing</a>
                <a href="">Process</a>
                <a href="" className="schedule-btn">Schedule a Call</a>
            </nav>
        </header>

    )
}

export default index