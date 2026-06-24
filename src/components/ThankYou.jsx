import React, { useEffect, useState } from "react";
import Petals from "./Overlay"; // celebratory petals overlay

function ThankYou({ onRedirect }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let time = 0;
    const interval = setInterval(() => {
      time += 1;
      setProgress((time / 10) * 100);
      if (time >= 10) {
        clearInterval(interval);
        onRedirect(); // go back to home after 10s
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [onRedirect]);

  return (
    <div className="thankyou-page">
      <Petals season="spring" />
      <h2>Thank You!</h2>
      <p>Your response has been recorded. We truly appreciate your blessings.</p>
      <p>You’ll be redirected to the home page shortly.</p>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default ThankYou;
