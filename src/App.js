// import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/Pages/HomePage/HomePage';
import ListingPage from './Pages/HomePage/ListingPage';
import SearchResultsPage from '../src/Pages/HomePage/SearchResultsPage';
import AdminDashboard from './Pages/AdminPages/AdminDashboard';
import AdminHotel from './Pages/AdminPages/AddHotel' 
// import Modal from './components/Modal';
import ReservationsListPages from './Pages/ReservationsListPages/ReservationsListPages';
import LoginPage from './Pages/LoginPage/LoginPage';
import LuxeSearchPage from './Pages/LuxeSearchPage/LuxeSearchPage';
import ListingHotelPage from './Pages/ListingHotelPage/ListingHotelPage';
import SignUp from './components/SignUp/SignUp';

function App() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listing/:id" element={<ListingPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/02" element={<AdminHotel />} />
          <Route path="/reservationsListPages" element={<ReservationsListPages />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/signup" element={ <SignUp />} />
          <Route path="/luxeSearchPage" element={<LuxeSearchPage />} />
          <Route path="/listingHotelPage" element={<ListingHotelPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
