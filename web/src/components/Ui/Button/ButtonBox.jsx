import React, { useState } from 'react';

const ButtonBox = ({ name, onClick, isSelected }) => {
  //const [isSelected, setIsSelected] = useState(false);

  // const handleClick = () => {
  //   setIsSelected(true);
  //   onClick();
  // };

  return (
    <button
      onClick={onClick}
      className={` w-40 h-20 ${isSelected ? 'bg-cyanCustom border border-green-700 border-solid' : 'bg-transparent border border-green-900 border-solid'} text-black font-semibold rounded-md shadow-lg transition-all hover:bg-cyan-500`}
    >
      {name}
    </button>
  );
};

export default ButtonBox;
