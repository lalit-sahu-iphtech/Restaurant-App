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
// import SignUp from './pages/AuthPage/SignUp'
// import SignIn from './pages/AuthPage/SignIn'
import CheckoutMenu from './pages/CheckoutMenuPage/CheckoutMenu'
import TablePage from './pages/BookTablePage/TablePage'
import StoreLocationPage from './pages/StoreLocation/StoreLocationPage'
import AuthModal from './pages/AuthPage/AuthModal'


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onBookTable={openModal} />

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
        <Route path="/our-story" element={<StoryPage/>}/>
        <Route path="/location" element={<LocationPage/>}/>
        <Route path="/store-location" element={<StoreLocationPage/>}/>
        <Route path="/gift-card" element={<GiftPage/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/sitemap" element={<Sitemap/>}/>
        <Route path="/order" element={<CheckoutMenu/>}/>

      </Routes>

     
      <TablePage 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />

      <AuthModal/>

      <Footer onBookTable={openModal}/>
    </>
  )
}

export default App