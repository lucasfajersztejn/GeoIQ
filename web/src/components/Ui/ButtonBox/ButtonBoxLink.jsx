import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonBoxLink = ({ name, img, to }) => {
  return (
    <Link
      to={to}
      className="flex flex-col items-center justify-center w-20 h-20 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      {img && <img src={img} alt={name} className="w-10 h-10 mb-2" />}
      <span className="text-sm font-medium">{name}</span>
    </Link>
  );
};

// Validación de PropTypes
ButtonBoxLink.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string, // Optional
  to: PropTypes.string.isRequired,
};

export default ButtonBoxLink;
