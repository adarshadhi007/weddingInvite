import React from "react";

const TravelStay = () => (
  <section id="travel" className="card">
    <h3>Travel & Stay</h3>

    <p>
      For our beloved guests traveling from near and far, here are some
      budget-friendly accommodation options near our wedding venues. We
      recommend booking in advance, as prices may vary depending on availability.
    </p>

    <div className="destination">
      <h4>📍 Kattappana</h4>
      <ul>
        <li>
          <strong>Hotel Grand Plaza</strong>
        </li>
        <li>
          <strong>Hotel Green Berg</strong>
        </li>
        <li>
          <strong>Hotel Hill View</strong>
   
        </li>
      </ul>
    </div>

    <div className="destination">
      <h4>📍 Chengannur</h4>
      <ul>
        <li>
          <strong>Hotel Shankar's Residency</strong>
        </li>
        <li>
          <strong>Hotel Nandanam Residency</strong>
        
        </li>
        <li>
          <strong>Hotel Bhagavath Gardens</strong>
       
        </li>
      </ul>
    </div>

    <p style={{ marginTop: "1.5rem" }}>
      If you need assistance with booking accommodation or transportation,
      please feel free to contact us. We'd be happy to help!
    </p>
  </section>
);

export default TravelStay;