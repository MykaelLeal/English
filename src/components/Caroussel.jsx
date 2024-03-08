import React, { useState, useEffect } from 'react';
import slider1 from '../assets/slide-1.jpeg';
import '../styles/caroussel.css'; 

const Caroussel = () => {
  const [counter, setCounter] = useState(0);
  const intervalTime = 5000;

  const imageUrls = [slider1]; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(prevCounter => (prevCounter + 1) % imageUrls.length);
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, [imageUrls]);

  return (
    <div className="carousel">
      <div className="carousel-slide" style={{ transform: `translateX(${-counter * 100}%)` }}>
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Imagem ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Caroussel;
