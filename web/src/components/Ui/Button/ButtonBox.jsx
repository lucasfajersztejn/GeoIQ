import React, { useState } from 'react';

const ButtonBox = ({ name, onClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(true);
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`w-32 h-12 ${isSelected ? 'bg-cyanCustom' : 'bg-blue-500'} text-white font-semibold rounded-md shadow-md transition-all hover:bg-blue-700`}
    >
      {name}
    </button>
  );
};

export default ButtonBox;


// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// const ButtonBox = ({ name }) => {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <button
//       onClick={() => setIsActive(!isActive)} // Alternar el estado
//       className={`w-32 h-12 ${
//         isActive ? 'bg-cyanCustom' : 'bg-cyan-700'
//       } text-white font-semibold rounded-md shadow-md transition-all 
//                  hover:bg-cyan-500`}
//     >
//       {name}
//     </button>
//   );
// };

// ButtonBox.propTypes = {
//   name: PropTypes.string.isRequired,
// };

// export default ButtonBox;
