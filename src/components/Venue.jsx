import React from "react";

const Venue = () => (
  <section className="card">
    <h3>Venue Location</h3>
    <p>SN Study Center, Ambalakavala</p>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.2869907911627!2d77.11329429999999!3d9.7417397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07ab7aff5348ef%3A0x7f17221d5cc11412!2sSN%20Study%20Center%20Ambalakavala!5e0!3m2!1sen!2sin!4v1782224936039!5m2!1sen!2sin"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      title="Venue Map"
    ></iframe>
  </section>
);

export default Venue;
