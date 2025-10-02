import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import RegisterPage from "./components/auth/RegisterPage";
import LoginPage from "./components/auth/LoginPage";
import HomePage from "./components/pages/HomePage";
import FindFlightPage from "./components/pages/FindFlightsPage";
import ProfilePage from "./components/profile/ProfilePage";
import UpdateProfilePage from "./components/profile/UpdateProfilePage";
import BookingPage from "./components/pages/BookingPage";
import BookingDetailsPage from "./components/pages/BookingDetailsPage";
import { RouteGuard } from "./services/RouteGuard";



function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <div className="content">
        <Routes>
          {/* AUTH PAGES */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* PUBLIC PAGES */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/flights" element={<FindFlightPage />} />

          {/* CUSTOMER PAGES */}
          <Route path="/profile" element={<RouteGuard allowedRoles={["CUSTOMER"]} element={<ProfilePage />}/>} />
          <Route path="/update-profile" element={<RouteGuard allowedRoles={["CUSTOMER"]} element={<UpdateProfilePage />}/>} />
          <Route path="/book-flight/:id" element={<RouteGuard allowedRoles={["CUSTOMER", "ADMIN", "PILOT"]} element={<BookingPage />}/>} />
          <Route path="/booking/:id" element={<RouteGuard allowedRoles={["CUSTOMER", "ADMIN", "PILOT"]} element={<BookingDetailsPage />}/>} />

          {/* ADMIN & PILOT PAGES */}

          {/* Fallback for unmatched routes */}
          <Route path="*" element={<Navigate to="/home"/>}/>
 
        </Routes>
      </div>
    
      <Footer />
    </BrowserRouter>
  )

}

export default App;
