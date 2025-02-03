import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SurveyContext } from '../context/Survey.context';
import Card from '../components/Ui/Card/Card';
import oneGrey from '../assets/images/One/Grey.png';
import oneRed from '../assets/images/One/Red.png';
import oneGreen from '../assets/images/One/Green.png';
import oneBlue from '../assets/images/One/Blue.png';
import oneBeige from '../assets/images/One/Beige.png';
import IlumaBlue from '../assets/images/Iluma/Iluma azul.png';
import IlumaBeige from '../assets/images/Iluma/Iluma Beige.png';
import IlumaGreen from '../assets/images/Iluma/Iluma Green.png';
import IlumaGrey from '../assets/images/Iluma/Iluma Grey.png';
import IlumaRed from '../assets/images/Iluma/Iluma Red.png';
import PrimeBeige from '../assets/images/Prime/Beige.png';
import PrimeGreen from '../assets/images/Prime/Green.png';
import PrimeBlack from '../assets/images/Prime/Black.png';
import PrimeBronze from '../assets/images/Prime/Gris Lunar.png';



import axios from 'axios';

const Devices = () => {
  const { surveyData, setSurveyData } = useContext(SurveyContext);
  const navigate = useNavigate();

  const handleDeviceCountChange = (name, count) => {
    setSurveyData(prevData => {
      const deviceIndex = prevData.deviceSales.findIndex(device => device.name.startsWith(name));
      let updatedDeviceSales;
      if (deviceIndex !== -1) {
        if (count === 0) {
          updatedDeviceSales = prevData.deviceSales.filter(device => !device.name.startsWith(name));
        } else {
          updatedDeviceSales = prevData.deviceSales.map((device, index) => 
            index === deviceIndex ? { name: `${name} (${count})` } : device
          );
        }
      } else {
        updatedDeviceSales = [...prevData.deviceSales, { name: `${name} (${count})` }];
      }
      return { ...prevData, deviceSales: updatedDeviceSales };
    });
  };

  const handleAccessoryCountChange = (name, count) => {
    setSurveyData(prevData => {
      const accessoryIndex = prevData.accessorySales.findIndex(accessory => accessory.name.startsWith(name));
      let updatedAccessorySales;
      if (accessoryIndex !== -1) {
        if (count === 0) {
          updatedAccessorySales = prevData.accessorySales.filter(accessory => !accessory.name.startsWith(name));
        } else {
          updatedAccessorySales = prevData.accessorySales.map((accessory, index) => 
            index === accessoryIndex ? { name: `${name} (${count})` } : accessory
          );
        }
      } else {
        updatedAccessorySales = [...prevData.accessorySales, { name: `${name} (${count})` }];
      }
      return { ...prevData, accessorySales: updatedAccessorySales };
    });
  };

  const handleNext = async () => {
    const formattedDeviceSales = surveyData.deviceSales.map(device => device.name).join(', ');
    const formattedAccessorySales = surveyData.accessorySales.map(accessory => accessory.name).join(', ');

    const formattedSurveyData = {
      ...surveyData,
      deviceSales: formattedDeviceSales,
      accessorySales: formattedAccessorySales
    };

    console.log('Survey data:', formattedSurveyData);

    try {
      const response = await axios.post('http://localhost:3000/api/v1/surveys', formattedSurveyData);
      console.log('Survey saved:', response.data);
      navigate('/'); // Navegar a la página principal
    } catch (error) {
      console.error('Error saving survey:', error);
      if (error.response && error.response.data) {
        console.error('Response data:', error.response.data); // Ver el mensaje de error del servidor
      }
    }
  };

  const handleBack = () => {
    setSurveyData(prevData => ({
      ...prevData,
      deviceSales: [],
      accessorySales: []
    }));
    navigate('/information');
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center text-2xl font-bold mb-4">Devices</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
        <Card 
          image={oneGrey}
          title="Iluma One Pebble Grey" 
          onCountChange={(count) => handleDeviceCountChange('Iluma One Pebble Grey', count)}
        />
        <Card 
          image={oneRed}º
          title="Iluma One Sunset Red" 
          onCountChange={(count) => handleDeviceCountChange('Iluma One Sunset Red', count)}
        />
        <Card 
          image={oneGreen}º
          title="Iluma One Moss Green" 
          onCountChange={(count) => handleDeviceCountChange('Iluma One Moss Green', count)}
        />
        <Card 
          image={oneBlue}º
          title="Iluma One Azure Blue" 
          onCountChange={(count) => handleDeviceCountChange('Iluma One Azure Blue', count)}
        />
        <Card 
          image={oneBeige}º
          title="Iluma One Pebble Beige" 
          onCountChange={(count) => handleDeviceCountChange('Iluma One Pebble Beige"', count)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 mt-4">
        <Card 
          image={IlumaBlue}
          title="Iluma MK Azure Blue" 
          onCountChange={(count) => handleDeviceCountChange('Iluma MK Azure Blue', count)}
        />
        <Card 
          image={IlumaBeige}º
          title="Iluma MK Pebble Beige" 
          onCountChange={(count) => handleDeviceCountChange('Iluma MK Pebble Beige', count)}
        />
        <Card 
          image={IlumaGreen}º
          title="Iluma MK Moss Green" 
          onCountChange={(count) => handleDeviceCountChange('Iluma MK Moss Green', count)}
        />
        <Card 
          image={IlumaGrey}º
          title="Iluma MK Pebble Grey" 
          onCountChange={(count) => handleDeviceCountChange('Iluma MK Pebble Grey', count)}
        />
        <Card 
          image={IlumaRed}º
          title="Iluma MK Sunset Red" 
          onCountChange={(count) => handleDeviceCountChange('Iluma MK Sunset Red"', count)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-4">
        <Card 
          image={PrimeBeige}
          title="Iluma Prime Golden Khaki" 
          onCountChange={(count) => handleDeviceCountChange('Iluma Prime Golden Khaki', count)}
        />
        <Card 
          image={PrimeGreen}º
          title="Iluma Prime Jade Green" 
          onCountChange={(count) => handleDeviceCountChange('Iluma Prime Jade Green', count)}
        />
        <Card 
          image={PrimeBlack}º
          title="Iluma Prime Obsidian Black" 
          onCountChange={(count) => handleDeviceCountChange('Iluma Prime Obsidian Black', count)}
        />
        <Card 
          image={PrimeBronze}º
          title="Iluma Prime Bronze Taupe" 
          onCountChange={(count) => handleDeviceCountChange('Iluma Prime Bronze Taupe', count)}
        />
      </div>


      <h2 className="text-center text-2xl font-bold mt-8 mb-4">Accessories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card 
          image="https://via.placeholder.com/150"
          title="Accessory 1" 
          onCountChange={(count) => handleAccessoryCountChange('Accessory 1', count)}
        />
        <Card 
          image="https://via.placeholder.com/150"
          title="Accessory 2" 
          onCountChange={(count) => handleAccessoryCountChange('Accessory 2', count)}
        />
        {/* Agrega más tarjetas de accesorios según sea necesario */}
      </div>
      <div className="flex space-x-4 mt-8 justify-center">
        <button
          onClick={handleBack}
          className="w-32 h-12 bg-cyanCustom text-white font-semibold rounded-md shadow-md transition-all hover:bg-cyan-500"
        >
          Volver
        </button>
        <button
          onClick={handleNext}
          className="w-32 h-12 bg-cyanCustom text-white font-semibold rounded-md shadow-md transition-all hover:bg-cyan-500"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Devices;