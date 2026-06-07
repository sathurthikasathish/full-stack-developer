
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Abouts from './components/Pages/Abouts'
import Contact from './components/Pages/Contact'
import Home from './components/Pages/Home'
import Parent from './components/Pages/Parent'
import Service from './components/Pages/Service'

const App = () => {
  return (
    //Fragment Tag
    <>
    <h1>Hello World</h1>
    <h2>Hello World</h2>
    <Navbar/>
    <Home/>
    <Service/>
    <Abouts/>
    <Contact/>
    <Parent/>
    <Counter/>
    </>
  )
}

export default App