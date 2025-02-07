import About from "./Components/About/About";

import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

import Skills from "./Components/Skills/Skills";
import End from "./Components/End/End";
import Connection from "./Components/Connection/Connection";

function App() {
  return (
    <div className="font-sans">
      <div className="bg-gray-900 h-auto w-full overflow-hidden font-sans">
        <Navbar />
        <Home />
        <About className="bg-gradient-to-t from-slate-950 to-slate-900" />
        <Skills />
        <Projects />
        <Connection />
        <End />
      </div>
    </div>
  );
}

export default App;
