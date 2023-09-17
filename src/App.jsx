import Experiences from "./components/Experiences"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {

  return (
    <main className="bg-white px-10">
      <Navbar />
      <Profile />
      <Skills />
      <Experiences />
      <Projects />
    </main>
  )
}

export default App
