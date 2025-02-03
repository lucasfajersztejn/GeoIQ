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
import oneAoki from '../assets/images/E limit/One_AOKI.png';
import ilumaAoki from '../assets/images/E limit/Iluma_AOKI.png';
import primeAoki from '../assets/images/E limit/Prime_AOKI.png';
import oneStarterKit from '../assets/images/Veev one/One starter kit.png';
import oneSilkyGrey from '../assets/images/Veev one/One grey.png';
import oneVelvetBlack from '../assets/images/Veev one/One black.png';
import oneLusciousPink from '../assets/images/Veev one/One pink.png';
import oneFreshyGreen from '../assets/images/Veev one/One green.png';
import oneElectricPurple from '../assets/images/Veev one/One purple.png';
import vUltraBlueRaspberry from '../assets/images/Veev ultra/Blue raspberry.png';
import vUltraClassicMint from '../assets/images/Veev ultra/Classic Mint.png';
import vUltraLemonLime from '../assets/images/Veev ultra/Lemon lime.png';
import vUltraMango from '../assets/images/Veev ultra/Mango.png';
import vUltraPassionFruit from '../assets/images/Veev ultra/Passion fruit kiwi guava.png';
import vUltraStrawberry from '../assets/images/Veev ultra/Strawberry.png';
import vUltraWatermelon from '../assets/images/Veev ultra/Watermelon.png';





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
          image={IlumaGrey}º
          title="Iluma MK Pebble Grey" 
          onCountChange={(count) => handleDeviceCountChange('Iluma MK Pebble Grey', count)}
        />
        <Card 
          image={IlumaRed}º
          title="Iluma MK Sunset Red" 
          onCountChange={(count) => handleDeviceCountChange('Iluma MK Sunset Red"', count)}
        />
        <Card 
          image={IlumaGreen}º
          title="Iluma MK Moss Green" 
          onCountChange={(count) => handleDeviceCountChange('Iluma MK Moss Green', count)}
        />
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-4">
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
        <Card 
          image={PrimeGreen}º
          title="Iluma Prime Jade Green" 
          onCountChange={(count) => handleDeviceCountChange('Iluma Prime Jade Green', count)}
        />
        <Card 
          image={PrimeBeige}
          title="Iluma Prime Golden Khaki" 
          onCountChange={(count) => handleDeviceCountChange('Iluma Prime Golden Khaki', count)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
        <Card 
          image={oneAoki}º
          title="Iluma One AOKI Edition" 
          onCountChange={(count) => handleDeviceCountChange('Iluma One AOKI Edition"', count)}
        />
        <Card 
          image={ilumaAoki}º
          title="Iluma AOKI Edition" 
          onCountChange={(count) => handleDeviceCountChange('Iluma AOKI Edition', count)}
        />
        <Card 
          image={primeAoki}º
          title="Iluma Prime AOKI Edition" 
          onCountChange={(count) => handleDeviceCountChange('Iluma Prime AOKI Edition"', count)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
        <Card 
          image={oneStarterKit}º
          title="VEEV ONE Starter Kit" 
          onCountChange={(count) => handleDeviceCountChange('VEEV ONE Starter Kit', count)}
        />
        <Card 
          image={oneSilkyGrey}º
          title="VEEV ONE Silky Grey" 
          onCountChange={(count) => handleDeviceCountChange('VEEV ONE Silky Grey', count)}
        />
        <Card 
          image={oneVelvetBlack}º
          title="VEEV ONE Velvet Black" 
          onCountChange={(count) => handleDeviceCountChange('VEEV ONE Velvet Black', count)}
        />
        <Card 
          image={oneLusciousPink}º
          title="VEEV ONE Luscious Pink" 
          onCountChange={(count) => handleDeviceCountChange('VEEV ONE Luscious Pink', count)}
        />
        <Card 
          image={oneFreshyGreen}º
          title="VEEV ONE Freshy Green" 
          onCountChange={(count) => handleDeviceCountChange('VEEV ONE Freshy Green', count)}
        />
        <Card 
          image={oneElectricPurple}º
          title="VEEV ONE Electric Purple" 
          onCountChange={(count) => handleDeviceCountChange('VEEV ONE Electric Purple', count)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <Card 
          image={vUltraBlueRaspberry}º
          title="VEEV ULTRA Blue Raspberry" 
          onCountChange={(count) => handleDeviceCountChange('VEEV ULTRA Blue Raspberry', count)}
        />
        <Card 
          image={vUltraClassicMint}º
          title="VEEV ULTRA Classic Mint" 
          onCountChange={(count) => handleDeviceCountChange('VEEV ULTRA Classic Mint', count)}
        />
        <Card 
          image={vUltraLemonLime}º
          title="VEEV ULTRA Lemon Lime" 
          onCountChange={(count) => handleDeviceCountChange('VEEV ULTRA Lemon Lime', count)}
        />
        <Card 
          image={vUltraMango}º
          title="VEEV ULTRA Mango" 
          onCountChange={(count) => handleDeviceCountChange('VEEV ULTRA Mango', count)}
        />
        <Card 
          image={vUltraPassionFruit}º
          title="VEEV ULTRA Passion Fruit Kiwi Guava" 
          onCountChange={(count) => handleDeviceCountChange('VEEV ULTRA Passion Fruit Kiwi Guava', count)}
        />
        <Card 
          image={vUltraStrawberry}º
          title="VEEV ULTRA Strawberry" 
          onCountChange={(count) => handleDeviceCountChange('VEEV ULTRA Strawberry', count)}
        />
        <Card 
          image={vUltraWatermelon}º
          title="VEEV ULTRA Watermelon" 
          onCountChange={(count) => handleDeviceCountChange('VEEV ULTRA Watermelon', count)}
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
      <div className="flex space-x-4 mt-8 justify-center my-6">
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