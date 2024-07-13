import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/Pages/HomePage/HomePage';
import ListingPage from './Pages/HomePage/ListingPage';
import SearchResultsPage from '../src/Pages/HomePage/SearchResultsPage';
import AdminDashboard from './Pages/AdminPages/AdminDashboard';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="App">
        <button onClick={openModal}>Open Modal</button> {/* Example button to open modal */}
        {isModalOpen && <Modal closeModal={closeModal} />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listing/:id" element={<ListingPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
