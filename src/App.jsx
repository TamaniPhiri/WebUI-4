import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className=" px-4 md:px-12">
      <Navbar className=' -z-20 '/>
      <Hero className=' z-0'/>
    </div>
  )
}

export default App
