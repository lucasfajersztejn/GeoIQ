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
import levia from '../assets/images/Levia/Levia.png';
import vPodBlueMint from '../assets/images/Pods/Blue mint.png';
import vPodBlueBerry from '../assets/images/Pods/Blueberry.png';
import vPodClassicTobacco from '../assets/images/Pods/Classic tabaco.png';
import vPodMango from '../assets/images/Pods/Mango.png';
import vPodMelonCoconut from '../assets/images/Pods/Melón y Coco.png';
import vPodPassionFruit from '../assets/images/Pods/Passion fruit, kiwi & guava.png';
import vPodPineappleAndLemon from '../assets/images/Pods/Piña Limon.png';
import vPodStrawberry from '../assets/images/Pods/Strawberry.png';
import vPodWatermelon from '../assets/images/Pods/Watermelon.png';
import accAdaptadorDeCorriente from '../assets/images/Accesorios/Adaptador_De_Corriente.png';
import accIlumaUsbPowerAdaptator from '../assets/images/Accesorios/Cable_De_Carga.png';
import accIlumaPrimeWrapIridiscent from '../assets/images/Accesorios/Cubierta_Iridiscente.png';
import accIlumaPrimeWrapMicrofiber from '../assets/images/Accesorios/Cubierta_Microfibra.png';
import accIlumaPrimeWrapFabric from '../assets/images/Accesorios/Cubierta_Tela.png';
import accIlumaPrimeWrapLeather from '../assets/images/Accesorios/Wrap_Piel.png';
import accAluminiumDoorCover from '../assets/images/Accesorios/Door_Aluminium.png';
import accIlumaDoor from '../assets/images/Accesorios/Door_Metalica.png';
import accNeonDoor from '../assets/images/Accesorios/Door_Neon.png';
import accFabricSleeve from '../assets/images/Accesorios/Fabric_Sleeve.png';
import accFabricSleeveOne from '../assets/images/Accesorios/Fabric_Sleeve_One.png';
import accRingPremium from '../assets/images/Accesorios/Ring_Premium.png';
import accRingStandard from '../assets/images/Accesorios/Ring_Standar.png';
import accSiliconeSleeve from '../assets/images/Accesorios/Silicone_Sleeve.png';
import accSiliconeSleeveOne from '../assets/images/Accesorios/Silicone_Sleeve_One.png';
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
      reasonForVisit: '',
      outcome: '',
      test1: '',
      test2: '',
      productTest: false,
      firmwareUpdate: false,
      checkIn: false
    }));
    navigate('/information');
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center text-2xl font-bold mb-4">Devices</h2>
    
      {/* ILUMA ONE */}
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

      {/* ILUMA */}
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

      {/* PRIME */}
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

      {/* E-LIMIT */}
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

      {/* VEEV ONE */}
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

      {/* VEEV ULTRA */}
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
      
      <div className='w-full mt-10 h-1 bg-black'></div>

      
      {/* Accesorios */}
      <h2 className="text-center text-2xl font-bold mt-8 mb-4">Accessories</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        <Card
          image={levia}
          title="Levia"
          onCountChange={(count) => handleAccessoryCountChange('Levia', count)}
        />
        <Card
          image={vPodBlueMint}
          title="Pod Blue Mint"
          onCountChange={(count) => handleAccessoryCountChange('Pod Blue Mint', count)}
        />
        <Card
          image={vPodBlueBerry}
          title="Pod Blueberry"
          onCountChange={(count) => handleAccessoryCountChange('Pod Blue Berry', count)}
        />
        <Card
          image={vPodClassicTobacco}
          title="Pod Classic Tobacco"
          onCountChange={(count) => handleAccessoryCountChange('Pod Classic Tobacco', count)}
        />
        <Card
          image={vPodMango}
          title="Pod Mango"
          onCountChange={(count) => handleAccessoryCountChange('Pod Mango', count)}
        />
        <Card
          image={vPodMelonCoconut}
          title="Pod Melon Coconut"
          onCountChange={(count) => handleAccessoryCountChange('Pod Melon Coconut', count)}
        />
        <Card
          image={vPodPassionFruit}
          title="Pod Passion Fruit"
          onCountChange={(count) => handleAccessoryCountChange('Pod Passion Fruit', count)}
        />
        <Card
          image={vPodPineappleAndLemon}
          title="Pod Pineapple and Lemon"
          onCountChange={(count) => handleAccessoryCountChange('Pod Pineapple and Lemon', count)}
        />
        <Card
          image={vPodStrawberry}
          title="Pod Strawberry"
          onCountChange={(count) => handleAccessoryCountChange('Pod Strawberry', count)}
        />
        <Card
          image={vPodWatermelon}
          title="Pod Watermelon"
          onCountChange={(count) => handleAccessoryCountChange('Pod Watermelon', count)}
        />
      </div>
           
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        <Card 
          image={accAdaptadorDeCorriente}
          title="Adaptador de Corriente" 
          onCountChange={(count) => handleAccessoryCountChange('Adaptador de Corriente', count)}
        />
        <Card 
          image={accIlumaUsbPowerAdaptator}
          title="Cable de Carga" 
          onCountChange={(count) => handleAccessoryCountChange('Cable de Carga', count)}
        />
        <Card 
          image={accIlumaPrimeWrapIridiscent}
          title="Cubierta Iridiscente" 
          onCountChange={(count) => handleAccessoryCountChange('Cubierta Iridiscente', count)}
        />
        <Card 
          image={accIlumaPrimeWrapMicrofiber}
          title="Cubierta Microfibra" 
          onCountChange={(count) => handleAccessoryCountChange('Cubierta Microfibra', count)}
        />
        <Card 
          image={accIlumaPrimeWrapFabric}
          title="Cubierta Tela" 
          onCountChange={(count) => handleAccessoryCountChange('Cubierta Tela', count)}
        />
        <Card 
          image={accIlumaPrimeWrapLeather}
          title="Cubierta Piel" 
          onCountChange={(count) => handleAccessoryCountChange('Wrap Piel', count)}
        />
        <Card 
          image={accAluminiumDoorCover}
          title="Door Aluminium" 
          onCountChange={(count) => handleAccessoryCountChange('Door Aluminium', count)}
        />
        <Card 
          image={accIlumaDoor}
          title="Door Metalica" 
          onCountChange={(count) => handleAccessoryCountChange('Door Metalica', count)}
        />
        <Card 
          image={accNeonDoor}
          title="Door Neon" 
          onCountChange={(count) => handleAccessoryCountChange('Door Neon', count)}
        />
        <Card 
          image={accFabricSleeve}
          title="Fabric Sleeve" 
          onCountChange={(count) => handleAccessoryCountChange('Fabric Sleeve', count)}
        />
        <Card 
          image={accFabricSleeveOne}
          title="Fabric Sleeve One"
          onCountChange={(count) => handleAccessoryCountChange('Fabric Sleeve One', count)}
        />
        <Card
          image={accRingPremium}
          title="Ring Premium"
          onCountChange={(count) => handleAccessoryCountChange('Ring Premium', count)}
        />
        <Card
          image={accRingStandard}
          title="Ring Standard"
          onCountChange={(count) => handleAccessoryCountChange('Ring Standard', count)}
        />
        <Card
          image={accSiliconeSleeve}
          title="Silicone Sleeve"
          onCountChange={(count) => handleAccessoryCountChange('Silicone Sleeve', count)}
        />
        <Card
          image={accSiliconeSleeveOne}
          title="Silicone Sleeve One"
          onCountChange={(count) => handleAccessoryCountChange('Silicone Sleeve One', count)}
        />
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