import React, { useState, useEffect } from "react";
// import "./countdown.css"; // custom styles

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ message: "💍 It's Wedding Time!" });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section id="countdown" className="card countdown-section">
      <h3>Countdown to Our Wedding</h3>
      {timeLeft.message ? (
        <div className="countdown-message">{timeLeft.message}</div>
      ) : (
        <div className="countdown-grid">
          <div className="countdown-box">
            <span className="number">{timeLeft.days}</span>
            <span className="label">Days</span>
          </div>
          <div className="countdown-box">
            <span className="number">{timeLeft.hours}</span>
            <span className="label">Hours</span>
          </div>
          <div className="countdown-box">
            <span className="number">{timeLeft.minutes}</span>
            <span className="label">Minutes</span>
          </div>
          <div className="countdown-box">
            <span className="number">{timeLeft.seconds}</span>
            <span className="label">Seconds</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Countdown;
