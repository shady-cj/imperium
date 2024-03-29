import "./App.scss"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Benefits from "./pages/Benefits"
import Projects from "./pages/Projects"
import Pricing from "./pages/Pricing"
import Process from "./pages/Process"
import Faqs from "./pages/Faqs"
import Footer from "./pages/Footer"

function App() {

  return (
    <div className="container">
      <Home />
      <Services />
      <Benefits />
      <Projects />
      <Pricing />
      <Process />
      <Faqs />
      <Footer />
    </div>
  )
}

export default App
