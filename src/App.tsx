import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Skill from "./components/Skill"


function App() {
console.log(' https://tangerine-hummingbird-1479b6.netlify.app/')
  return (
    <div className="container w-[80%] mx-auto font-poppins">
      <Header/>
      <Home/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
