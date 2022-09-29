import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Nav'
import Tech from './components/TechStack'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    {/* Navbar */}
      <Navbar/>

      {/* Hero section */}

      <Hero/>

      {/* Tech stack */}

     <Tech/>

    </div>
  )
}

export default App
