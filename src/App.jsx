import "./App.scss"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Benefits from "./pages/Benefits"
import Projects from "./pages/Projects"

function App() {

  return (
    <div className="container">
      <Home />
      <Services />
      <Benefits />
      <Projects />
    </div>
  )
}

export default App
