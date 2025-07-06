import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Rating = ({ value, text }) => {
  return (
    <div className="d-flex text-muted">
      <span
        className="d-flex align-items-center"
        style={{ marginRight: "3px" }}
      >
        {value >= 1 ? (
          <FaStar />
        ) : value >= 0.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span
        className="d-flex align-items-center"
        style={{ marginRight: "3px" }}
      >
        {value >= 2 ? (
          <FaStar />
        ) : value >= 1.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span
        className="d-flex align-items-center"
        style={{ marginRight: "3px" }}
      >
        {value >= 3 ? (
          <FaStar />
        ) : value >= 2.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span
        className="d-flex align-items-center"
        style={{ marginRight: "3px" }}
      >
        {value >= 4 ? (
          <FaStar />
        ) : value >= 3.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
      <span
        className="d-flex align-items-center"
        style={{ marginRight: "10px" }}
      >
        {value >= 5 ? (
          <FaStar />
        ) : value >= 4.5 ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>

      <span>{text} reviews</span>
    </div>
  );
};

export default Rating;
