import React from "react";

const Venues = () => (
  <section className="card venues">
    <h3>Venue Locations</h3>

    <div className="venue-block">
      <h4>Wedding Ceremony</h4>
      <p>SN Study Center, Ambalakavala</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.2869907911627!2d77.11329429999999!3d9.7417397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07ab7aff5348ef%3A0x7f17221d5cc11412!2sSN%20Study%20Center%20Ambalakavala!5e0!3m2!1sen!2sin!4v1782224936039!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Wedding Venue Map"
      ></iframe>
    </div>

    <div className="venue-block">
      <h4>Reception</h4>
      <p>St Mary's Parish Hall, Kallissery</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3936.9494080254285!2d76.60062787502261!3d9.337744690736448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMjAnMTUuOSJOIDc2wrAzNicxMS41IkU!5e0!3m2!1sen!2sin!4v1786209655386!5m2!1sen!2sin"
      width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Wedding Venue Map"></iframe>
    </div>
  </section>
);

export default Venues;
