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
                <a className="nav-menu-item" href="#services">Services</a>
                <a className="nav-menu-item" href="#benefits">Why Us</a>
                <a className="nav-menu-item" href="#projects">Project</a>
                <a className="nav-menu-item lg-screen-display" href="#pricing">Pricing</a>
                <a className="nav-menu-item lg-screen-display" href="#process">Process</a>
                <a href="https://calendly.com/imperiumdesignsinfo-e3u/30min" className="schedule-btn" target="_blank" rel="noreferrer">Schedule a Call</a>
            </nav>
        </header>

    )
}

export default index