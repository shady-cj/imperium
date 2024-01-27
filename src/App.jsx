import "./App.scss"
import Home from "./pages/Home"
// import Services from "./pages/Services"
// import Benefits from "./pages/Benefits"
// import Projects from "./pages/Projects"
// import Pricing from "./pages/Pricing"
// import Process from "./pages/Process"
import Faqs from "./pages/Faqs"
import Footer from "./pages/Footer"
import React, { Suspense } from 'react';
const Benefits = React.lazy(() => import("./pages/Benefits"))
const Services = React.lazy(() => import("./pages/Services"))
const Projects = React.lazy(() => import("./pages/Projects"))
const Pricing = React.lazy(() => import("./pages/Pricing"))
const Process = React.lazy(() => import("./pages/Process"))
function App() {

  return (
    <div className="container">
      <Home />
      <Services />
      <Suspense fallback={<div></div>}>
        <Benefits />
        <Projects />
        <Pricing />
        <Process />
      </Suspense>
      <Faqs />
      <Footer />
    </div>
  )
}

export default App
