import React from "react";

const Petals = () => {
  const petals = Array.from({ length: 15 }); // 15 petals

  return (
    <div className="petals">
      {petals.map((_, i) => {
        const left = Math.random() * 100; // random horizontal position
        const duration = 10 + Math.random() * 10; // random fall speed
        const delay = Math.random() * 5; // staggered start

        return (
          <div
            key={i}
            className="petal"
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

export default Petals;
