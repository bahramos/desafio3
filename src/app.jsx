import { useState } from 'preact/hooks'
import './app.css'
import Navbar from './Componentes/sections/Navbar'
import Presentation from './Componentes/sections/Presentation'
import Projects from './Componentes/sections/Projects'
import About from './Componentes/sections/About'
import Footer from './Componentes/sections/Footer'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Presentation/>
        <Projects/>
        <About/>
        <Footer/>
      </div>
    </>
  );
}

