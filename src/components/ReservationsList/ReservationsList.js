import React from 'react';
import './ReservationsList.css';

const ReservationsList = () => {
  const reservations = [
    {
      bookedBy: "Johann Coetzee",
      property: "Property 1",
      checkin: "19/06/2024",
      checkout: "24/06/2024"
    },
    {
      bookedBy: "Dakalo Sadiki",
      property: "Property 2",
      checkin: "19/06/2024",
      checkout: "19/06/2024"
    },
    {
      bookedBy: "Mpho Buthelezi",
      property: "Property 1",
      checkin: "25/06/2024",
      checkout: "30/06/2024"
    }
  ];

  return (
    <div className="reservations-list">
      <h2>My Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Booked by</th>
            <th>Property</th>
            <th>Checkin</th>
            <th>Checkout</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={index}>
              <td>{reservation.bookedBy}</td>
              <td>{reservation.property}</td>
              <td>{reservation.checkin}</td>
              <td>{reservation.checkout}</td>
              <td>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationsList;
