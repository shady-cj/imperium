import "./index.scss";
import Header from "../../components/Header"
import Hero from "../../components/Hero"

const index = () => {
    return (
        <section id="home" className="home-wrapper">
            <Header />
            <Hero />
        </section>
    )
}

export default index