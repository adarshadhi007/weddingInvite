import React from "react";

const Overlay = ({ season = "spring" }) => {
  const items = Array.from({ length: 20 }); // number of falling elements

  return (
    <div className={`overlay ${season}`}>
      {items.map((_, i) => {
        const left = Math.random() * 100;
        const duration = 10 + Math.random() * 10;
        const delay = Math.random() * 5;

        return (
          <div
            key={i}
            className="overlay-item"
            style={{
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Overlay;
