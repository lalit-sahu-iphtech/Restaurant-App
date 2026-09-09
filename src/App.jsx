import { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import MenuPage from './pages/menuPage/MenuPage'
import Footer from './component/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import StoryPage from './pages/storyPage/StoryPage'
import LocationPage from './pages/LocationPage/LocationPage'
import GiftPage from './pages/GiftPage/GiftPage'
import Privacy from './pages/Privacypage/privacy'
import Terms from './pages/TermsPage/Terms'
import Sitemap from './pages/SitemapPage/Sitemap'
import SignUp from './pages/AuthPage/SignUp'
import SignIn from './pages/AuthPage/SignIn'
import CheckoutMenu from './pages/CheckoutMenuPage/CheckoutMenu'

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
        <Route path="/our-story"element={<StoryPage/>}/>
        <Route path="/location"element={<LocationPage/>}/>
        <Route path="/gift-card"element={<GiftPage/>}/>
        <Route path="/privacy"element={<Privacy/>}/>
        <Route path="/terms"element={<Terms/>}/>
        <Route path="/sitemap"element={<Sitemap/>}/>
        <Route path="/signUp"element={<SignUp/>}/>
        <Route path="/signIn"element={<SignIn/>}/>
        <Route path="/checkout-menu"element={<CheckoutMenu/>}/>

      </Routes>

      <Footer/>
    </>
  )
}

export default App