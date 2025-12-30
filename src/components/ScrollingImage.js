import React from 'react';
import './ScrollingImage.css';
import dollarImage from '../assets/us_one_dollar_bill.png'; // Adjust path if needed

function ScrollingImage({ speed = 20 }) {
  const varOcg = Array(10).fill(dollarImage); // __define-ocg__ image list

  return (
    <div className="scrolling-container">
      <div
        className="scrolling-track left-to-right"
        style={{ animationDuration: `${speed}s` }}
      >
        {varOcg.concat(varOcg).map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt="Scrolling" />
        ))}
      </div>
    </div>
  );
}

export default ScrollingImage;
