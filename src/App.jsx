import About from "./Components/About/About"

import Contact from "./Components/contact/Contact"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"
import Footer from "./Components/footer/Footer"
import Skills from "./Components/Skills/Skills"

function App() {
  

  return (
    <div className="font-sans">
    <div className="bg-gray-900 h-auto w-full overflow-hidden font-sans"> 
    <Navbar/>
    <Home/>
    <About className="bg-gradient-to-t from-slate-950 to-slate-900"/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
    </div>
    
  )
}

export default App
