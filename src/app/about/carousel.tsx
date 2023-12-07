import React, { useState } from 'react';

const Carousel = () => {
  const images = ["/image1.png", "/image2.png", "/image3.png"];
  const [Index, setIndex] = useState(1);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: "-10vw", overflowX: "hidden" }}>
      <img
        src="/left-arrow.png"
        alt="Left Arrow"
        onClick={handlePrev}
        style={{marginRight: "-12vw",width: "40%"}}
      />
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          style={{
            transform: `scale(${index === Index ? 1 : 0.75})`,
            transition: 'transform 0.5s ease-in-out',
            // marginLeft: `${index === 2 ? "-5vw" : "-7vw"}`,
            marginLeft: "-5vw",
            marginRight: `${index === 2 ? "-7vw" : "-7.5vw"}`,
            width: '40%',
          }}
        />
      ))}
      <img
        src="/right-arrow.png"
        alt="Right Arrow"
        onClick={handleNext}
        style={{marginLeft: "-12vw",width: "40%"}}
      />
    </div>
  );
};

export default Carousel;
