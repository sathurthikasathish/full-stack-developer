
import { useState } from 'react'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Abouts from './components/Pages/Abouts'
import Contact from './components/Pages/Contact'
import Home from './components/Pages/Home'
import Parent from './components/Pages/Parent'
import Service from './components/Pages/Service'
import { Routes,Route } from 'react-router-dom'
import Effect from './components/Effect'

const App = () => {
  return (
    //Fragment Tag
    <>
    
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<Abouts/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Service' element={<Service/>}></Route>
      <Route path='/Parent' element={<Parent/>}></Route>
      <Route path='useState' element={<Counter/>}></Route>
      <Route path='useEffect' element={<Effect/>}></Route>
      </Routes>
    </>
  )
}

export default App