import { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import MenuPage from './pages/menuPage/MenuPage'
import Footer from './component/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import StoryPage from './pages/storyPage/StoryPage'
import LocationPage from './pages/LocationPage/LocationPage'

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
        <Route path="/our-story"element={<StoryPage/>}/>
        <Route path="/location"element={<LocationPage/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App