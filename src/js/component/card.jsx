import React from "react";

export const Card = ({image, title, text}) => {

  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <div className="card-img-container">
          <img src={image} className="card-img-top img-fluid" alt="imagen" />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
        <div className="card-footer bg-light text-center border-0">
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
};

Card.prototype;

