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
                <a className="nav-menu-item" href="">Services</a>
                <a className="nav-menu-item" href="">Why Us</a>
                <a className="nav-menu-item" href="">Project</a>
                <a className="nav-menu-item lg-screen-display" href="">Pricing</a>
                <a className="nav-menu-item lg-screen-display" href="">Process</a>
                <a href="" className="schedule-btn">Schedule a Call</a>
            </nav>
        </header>

    )
}

export default index