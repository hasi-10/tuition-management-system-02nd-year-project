import React from "react";
import { useNavigate } from "react-router-dom";

import commerce from "../assets/eco.jpeg";
import maths from "../assets/geo.jpeg";
import science from "../assets/phy.jpeg";

function Timetable() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid bg-secondary min-vh-100 py-4">

      <div className="container">

        <h1 className="fw-bold mb-4">Timetable</h1>

        <div
          id="timetableCarousel"
          className="carousel slide"
          data-bs-ride="false"
        >

          <div className="carousel-inner">

            <div className="carousel-item active text-center">
              <img
                src={commerce}
                className="d-block mx-auto img-fluid"
                alt="Commerce"
                width="500"
              />
            </div>

            <div className="carousel-item text-center">
              <img
                src={maths}
                className="d-block mx-auto img-fluid"
                alt="Maths"
                width="500"
              />
            </div>

            <div className="carousel-item text-center">
              <img
                src={science}
                className="d-block mx-auto img-fluid"
                alt="Science"
                width="500"
              />
            </div>

            

          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#timetableCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#timetableCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>

        <div className="text-end mt-4">
          <button
            className="btn btn-dark"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>

      </div>

    </div>
  );
}

export default Timetable;