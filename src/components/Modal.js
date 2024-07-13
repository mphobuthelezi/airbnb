import React from 'react';
import Header from '../components/LandingPage/Header/Header';
import NavBar from '../components/Navigation/NavBar';
import './Modal.css';

const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <button onClick={closeModal} className="close-modal-button">Close</button>
      <Header />
      <NavBar />
    </div>
  );
};

export default Modal;
