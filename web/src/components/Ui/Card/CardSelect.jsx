import React, { useState } from 'react';

const CardSelected = ({ image, title, footer, onClick, isSelected}) => {

  return (
    <button 
    className={`border rounded-lg shadow-md p-4 ${isSelected ? 'bg-cyanCustom border border-green-700 border-solid' : 'bg-transparent border border-green-900 border-solid'}`}
    onClick={onClick}
    >
      {image && <img src={image} alt={title} className="w-52 h-52 mb-4 mx-auto" style={{ margin: '0 auto' }} />}
      <div className="font-bold text-lg text-center mb-2">{title}</div>
      {footer && <div className="mt-4">{footer}</div>}
    </button>
  );
};

export default CardSelected;