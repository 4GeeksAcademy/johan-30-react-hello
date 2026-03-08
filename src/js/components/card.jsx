import React from "react";

const Card = ({ image, title, text, buttonText, buttonLink }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div className="card h-100 text-center shadow-sm custom-card">
        <img src={image} className="card-img-top" alt={title} />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text flex-grow-1">{text}</p>
        </div>

        <div className="card-footer bg-light">
          <a
            href={buttonLink}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;