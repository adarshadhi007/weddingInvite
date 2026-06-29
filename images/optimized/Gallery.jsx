import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

function Gallery() {
  const [open, setOpen] = useState(false);

  const slides = [
    { src: "images/IMG_0422.JPG.jpeg", title: "Engagement photo" },
    { src: "images/DSC07516.JPG.jpeg", title: "Couple photo" },
    { src: "images/DSC07488.JPG.jpeg", title: "Family photo" },
    { src: "images/DSC07454.JPG.jpeg", title: "Pre-wedding shoot" },
    { src: "images/DSC07468.JPG.jpeg", title: "Pre-wedding shoot" },
    { src: "images/DSC07510.JPG.jpeg", title: "Pre-wedding shoot" },
    { src: "images/DSC07681.JPG.jpeg", title: "Pre-wedding shoot" },
    { src: "images/DSC07946.JPG.jpeg", title: "Pre-wedding shoot" },
    { src: "images/DSC08193.JPG.jpeg", title: "Pre-wedding shoot" }
  ];

  return (
    <div className="gallery">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.title}
          onClick={() => setOpen(true)}
          style={{
            width: "200px",
            margin: "10px",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "transform 0.3s ease"
          }}
        />
      ))}

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          plugins={[Thumbnails, Zoom]}
        />
      )}
    </div>
  );
}

export default Gallery;
