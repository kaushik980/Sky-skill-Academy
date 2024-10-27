import React from "react";
import "./Card.css";
const Card = ({ data }) => {
  const { image, title, duration, modes,button_color } = data;
  return (
    <div className="main_card_container">
      <div className="image_container">
        <img className="banner_image" src={image} alt={title} />
      </div>

      <div className="button_container">
        {modes.map((mode, index) => (
          <button key={index} className={`${mode.toLowerCase()}_btn`}>
            {mode}
          </button>
        ))}
      </div>

      <div className="title_container">
        <p className="duration">{duration}</p>
        <h4 className="title">{title}</h4>
      </div>

      <div className="booking_container">
        <button
          style={{ border: `1px solid ${button_color}` }}
          className="more_details_btn"
        >
          More Details
        </button>
        <button style={{ background: `${button_color}` }} className="book_demo_btn">
          Book a free Demo
        </button>
      </div>
    </div>
  );
};

export default Card;
