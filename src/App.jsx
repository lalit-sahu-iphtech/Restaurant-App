import { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import MenuPage from './pages/menuPage/MenuPage'
import Footer from './component/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App