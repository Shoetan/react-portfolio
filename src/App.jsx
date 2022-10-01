import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Nav'
import Projects from './components/Projects'
import Tech from './components/TechStack'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
    {/* Navbar */}
      <Navbar/>

      {/* Hero section */}

      <Hero/>

      {/* Tech stack section */}

     <Tech/>

     {/* Projects section */}

     <Projects/>

    </div>
  )
}

export default App
