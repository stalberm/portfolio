import Contact from "./Contact"
import Home from "./Home"
import Projects from "./Projects"
import Work from "./Work"
import Sidenav from "./components/sidenav"

function App() {
  return (
    <div>
      <Sidenav />
      <Home />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
