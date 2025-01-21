import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SurveyContext } from '../context/Survey.context';
import Card from '../components/Ui/Card/Card';
import oneGrey from '../assets/images/One/Grey.jpg';
import axios from 'axios';

const Devices = () => {
  const { surveyData, setSurveyData } = useContext(SurveyContext);
  const navigate = useNavigate();

  console.log('Survey Data:', surveyData);

  const handleDeviceCountChange = (name, count) => {
    setSurveyData(prevData => {
      const deviceIndex = prevData.deviceSales.findIndex(device => device.name === name);
      let updatedDeviceSales;
      if (deviceIndex !== -1) {
        if (count === 0) {
          updatedDeviceSales = prevData.deviceSales.filter(device => device.name !== name);
        } else {
          updatedDeviceSales = prevData.deviceSales.map((device, index) => 
            index === deviceIndex ? { ...device, quantity: count } : device
          );
        }
      } else {
        updatedDeviceSales = [...prevData.deviceSales, { name, quantity: count }];
      }
      return { ...prevData, deviceSales: updatedDeviceSales };
    });
  };

  const handleAccessoryCountChange = (name, count) => {
    setSurveyData(prevData => {
      const accessoryIndex = prevData.accessorySales.findIndex(accessory => accessory.name === name);
      let updatedAccessorySales;
      if (accessoryIndex !== -1) {
        if (count === 0) {
          updatedAccessorySales = prevData.accessorySales.filter(accessory => accessory.name !== name);
        } else {
          updatedAccessorySales = prevData.accessorySales.map((accessory, index) => 
            index === accessoryIndex ? { ...accessory, quantity: count } : accessory
          );
        }
      } else {
        updatedAccessorySales = [...prevData.accessorySales, { name, quantity: count }];
      }
      return { ...prevData, accessorySales: updatedAccessorySales };
    });
  };

  const handleNext = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/surveys', surveyData);
      console.log('Survey saved:', response.data);
      navigate('/success'); // Navegar a una página de éxito o similar
    } catch (error) {
      console.error('Error saving survey:', error);
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
    <div className="p-4">
      <h2 className="text-center text-2xl font-bold mb-4">Devices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card 
          image={oneGrey}
          title="One Grey" 
          onCountChange={(count) => handleDeviceCountChange('One Grey', count)}
        />
        <Card 
          image="https://via.placeholder.com/150"
          title="Device 2" 
          onCountChange={(count) => handleDeviceCountChange('Device 2', count)}
        />
        {/* Agrega más tarjetas de dispositivos según sea necesario */}
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