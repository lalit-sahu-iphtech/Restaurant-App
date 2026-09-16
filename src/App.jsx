import { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import MenuPage from "./pages/menuPage/MenuPage";
import Footer from "./component/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import StoryPage from "./pages/storyPage/StoryPage";
import LocationPage from "./pages/LocationPage/LocationPage";
import GiftPage from "./pages/GiftPage/GiftPage";
import Privacy from "./pages/Privacypage/privacy";
import Terms from "./pages/TermsPage/Terms";
import Sitemap from "./pages/SitemapPage/Sitemap";
// import SignUp from './pages/AuthPage/SignUp'
// import SignIn from './pages/AuthPage/SignIn'
import CheckoutMenu from "./pages/CheckoutMenuPage/CheckoutMenu";
import TablePage from "./pages/BookTablePage/TablePage";
import StoreLocationPage from "./pages/StoreLocation/StoreLocationPage";
import AuthModal from "./pages/AuthPage/AuthModal";
import OrderReview from "./pages/OrderReview/OrderReview";
import Payment from "./pages/Payment/Payment";
import ThankYou from "./pages/ThankYou/ThankYou";
import SeeAll from "./pages/SeeAll/SeeAll";
import ScrollToTop from "./component/ScrollToTop/ScrollToTop";
import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute";
import Profile from "./pages/Profile/Profile";
import OrderHistory from "./pages/OrderHistory/OrderHistory";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <ScrollToTop />
      <Navbar onBookTable={openModal} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/our-story" element={<StoryPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/store-location" element={<StoreLocationPage />} />
        <Route path="/gift-card" element={<GiftPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/sitemap" element={<Sitemap />} />
        {/* Protected Route  */}
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <CheckoutMenu />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-review"
          element={
            <ProtectedRoute>
              <OrderReview />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/thank-you"
          element={
            <ProtectedRoute>
              <ThankYou />
            </ProtectedRoute>
          }
        />

        <Route path="/profile"element={<ProtectedRoute>
          <Profile/>
        </ProtectedRoute>}
        />
        <Route
         path="/orders"
        element={
        <ProtectedRoute>
            <OrderHistory />
        </ProtectedRoute>
    }
/>



        <Route
          path="/menu/see-all"
          element={
            
              <SeeAll />
          
          }
        />

      </Routes>

      <TablePage isOpen={isModalOpen} onClose={closeModal} />

      <AuthModal />

      <Footer onBookTable={openModal} />
    </>
  );
}

export default App;
