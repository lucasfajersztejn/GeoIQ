import React, { useState } from 'react';

const Card = ({ image, title, footer, onCountChange }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  const handleDecrement = () => {
    const newCount = count > 0 ? count - 1 : 0;
    setCount(newCount);
    onCountChange(newCount);
  };

  return (
    <div className="border rounded-lg shadow-md p-4">
      {image && <img src={image} alt={title} className="w-52 h-52 mb-4 mx-auto" style={{ margin: '0 auto' }} />}
      <div className="font-bold text-lg text-center mb-2">{title}</div>
      <div className="flex justify-center items-center mt-4">
        <button onClick={handleDecrement} className="bg-red-500 text-white px-2 py-1 rounded">-</button>
        <span className="mx-4">{count}</span>
        <button onClick={handleIncrement} className="bg-green-500 text-white px-2 py-1 rounded">+</button>
      </div>
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
};

export default Card;