import React from "react";
import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle className="icons" color = '#ffffff' />;
    case "cross":
      return <FaTimes className="icons" color = '#ffffff' />;
    default:
      return <FaPen className="icons" color = '#ffffff' />;
  }
};

export default Icon;
