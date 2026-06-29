import React, { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import AOS from "aos";
import "aos/dist/aos.css";

function Gallery() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

 const slides = [
  { src: process.env.PUBLIC_URL + "/images/optimized/IMG_0422.JPG.jpeg", title: "Engagement photo" },
  { src: process.env.PUBLIC_URL + "/images/optimized/DSC07516.JPG.jpeg", title: "Engagement photo" },
  { src: process.env.PUBLIC_URL + "/images/optimized/DSC07488.JPG.jpeg", title: "Engagement photo" },
    { src: process.env.PUBLIC_URL + "/images/optimized/DSC07510.JPG.jpeg", title: "Engagement photo" },
    { src: process.env.PUBLIC_URL + "/images/optimized/DSC07468.JPG.jpeg", title: "Engagement photo" },
      { src: process.env.PUBLIC_URL + "/images/optimized/DSC07454.JPG.jpeg", title: "Engagement photo" },
         { src: process.env.PUBLIC_URL + "/images/optimized/DSC07946.JPG.jpeg", title: "Engagement photo" },
        { src: process.env.PUBLIC_URL + "/images/optimized/image2.jpeg", title: "Engagement photo" },
           { src: process.env.PUBLIC_URL + "/images/optimized/DSC08193.JPG.jpeg", title: "Engagement photo" },
          { src: process.env.PUBLIC_URL + "/images/optimized/image1.jpeg", title: "Engagement photo" },
            { src: process.env.PUBLIC_URL + "/images/optimized/image3.jpeg", title: "" },


];


  return (
    <section className="gallery-section">
      <h2 className="gallery-title" data-aos="fade-down">Photo Gallery</h2>
      <div className="gallery">
        {slides.map((slide, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            style={{ position: "relative" }}
          >
            <img
              src={slide.src}
              alt={slide.title}
              onClick={() => setOpen(true)}
              style={{
                width: "100%",
                marginBottom: "20px",
                borderRadius: "12px",
                cursor: "pointer",
                transition: "transform 0.3s ease"
              }}
            />
            <div className="caption">{slide.title}</div>
          </div>
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          plugins={[Thumbnails, Zoom]}
        />
      )}
    </section>
  );
}


export default Gallery;