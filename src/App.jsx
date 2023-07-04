import './App.css'
import Navigation from './components/navigation/Navigation'
import Home from './components/Home/Home'
import About from './components/About/About'
import Service from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

function App() {


  return (
    <>
     <Navigation/>
     <Home/>
     <About/>
     <Service />
     <Portfolio/>
     <Contact/>
    </>
  )
}

export default App
