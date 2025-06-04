import { useState } from 'react'
import Header from './components/header/header'
import Home from './components/Home/home'
import Footer from './components/footer/footer'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="px-10 border-slate-300">Abcd </h1>
    <Header />
    <Home/>
    <Footer/>







    </>
  )
}

export default App
