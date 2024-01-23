import "./App.scss"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Benefits from "./pages/Benefits"
import Projects from "./pages/Projects"
import Pricing from "./pages/Pricing"
function App() {

  return (
    <div className="container">
      <Home />
      <Services />
      <Benefits />
      <Projects />
      <Pricing />
    </div>
  )
}

export default App
