import React from 'react'

export default function About(props) {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={props.logo.logo1} className="d-block w-100" alt="Image1"/>
          </div>
          <div className="carousel-item">
            <img src={props.logo.logo2} className="d-block w-100" alt="Image2"/>
          </div>
          <div className="carousel-item">
            <img src={props.logo.logo3} className="d-block w-100" alt="Image3"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}
