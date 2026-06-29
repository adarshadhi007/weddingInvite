import React, { useState } from "react";
import ThankYou from "./ThankYou"; // make sure this file exists

const Registry = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="registry" className="card">
      <h3>Registry</h3>
      {submitted ? (
        <ThankYou onRedirect={() => setSubmitted(false)} />
      ) : (
        <>
          <p>
            Your blessings are our greatest gift. If you wish to share a token of love,
            please leave your wishes below.
          </p>

          {/* Embed Google Form */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfTZrW_36kcw88s84lb4SDZU0gA5a9Ql-IdMOiREAXwMxO-lw/viewform?embedded=true"
            width="640"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Blessings Form"
          >
            Loading…
          </iframe>

          {/* Button to confirm submission */}
          <button
            onClick={() => setSubmitted(true)}
            className="rsvp-btn"
            style={{ marginTop: "20px" }}
          >
            I’ve Submitted
          </button>
        </>
      )}
    </section>
  );
};

export default Registry;
