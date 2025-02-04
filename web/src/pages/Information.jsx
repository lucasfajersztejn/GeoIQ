import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SurveyContext } from '../context/Survey.context';
import ButtonBox from '../components/Ui/Button/ButtonBox';
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
import amber from '../assets/images/Terea/Amber.png';
import russet from '../assets/images/Terea/Russet.png';
import sienna from '../assets/images/Terea/Sienna.png';
import softFuse from '../assets/images/Terea/SoftFuse.png';
import teak from '../assets/images/Terea/Teak.png';
import turquoise from '../assets/images/Terea/Turquoise.png';
import warmFuse from '../assets/images/Terea/WarmFuse.png';
import yellow from '../assets/images/Terea/Yellow.png';
import Card from '../components/Ui/Card/Card';
import CardSelected from '../components/Ui/Card/CardSelect';

const Information = () => {
  const { surveyData, setSurveyData } = useContext(SurveyContext);
  const navigate = useNavigate();
  const [selectedReason, setSelectedReason] = useState('');
  const [selectedOutcome, setSelectedOutcome] = useState('');
  const [selectedProductTest, setSelectedProductTest] = useState('');
  const [selectedFirmwareUpdate, setSelectedFirmwareUpdate] = useState('');
  const [selectedCheckIn, setSelectedCheckIn] = useState('');
  const [selectedTest1, setSelectedTest1] = useState('');
  const [selectedTest2, setSelectedTest2] = useState('');

  const handleSelect = (name, value) => {
    setSurveyData({ ...surveyData, [name]: value });
    if (name === 'reasonForVisit') {
      setSelectedReason(value);
    } else if (name === 'outcome') {
      setSelectedOutcome(value);
    } else if (name === 'productTest') {
      setSelectedProductTest(value);
    } else if (name === 'firmwareUpdate') {
      setSelectedFirmwareUpdate(value);
    } else if (name === 'checkIn') {
      setSelectedCheckIn(value);
    } else if (name === 'test1') {
      setSelectedTest1(value);
    } else if (name === 'test2') {
      setSelectedTest2(value);
    }
  };

  const isFormComplete = () => {
    if (surveyData.productTest === 'SI') {
      return surveyData.reasonForVisit && surveyData.outcome && surveyData.firmwareUpdate && surveyData.checkIn && (surveyData.test1 || surveyData.test2);
    }
    return surveyData.reasonForVisit && surveyData.outcome && surveyData.productTest !== undefined && surveyData.firmwareUpdate !== undefined && surveyData.checkIn !== undefined;
  };


  const handleNext = () => {
    if (isFormComplete()) {
      navigate('/devices');
    }
  };

  const handleBack = () => {
    setSurveyData(prevData => ({
      ...prevData,
      clientType: '',
      consumerType: '',
      clientOrigin: '',
      ageGroup: '',
      groupSize: ''
    }));
    navigate('/costumer');
  };

  return (
    <div className="flex flex-col items-center h-full">
      <div className="mb-4 flex flex-col">
        <label className="text-center text-2xl font-bold mb-4">Motivo de Atención:</label>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <ButtonBox name="Comprar Iqos" onClick={() => handleSelect('reasonForVisit', 'Comprar Iqos')} isSelected={selectedReason === 'Comprar Iqos'} />
          <ButtonBox name="Comprar Veev" onClick={() => handleSelect('reasonForVisit', 'Comprar Veev')} isSelected={selectedReason === 'Comprar Veev'} />
          <ButtonBox name="Comprar Accesorios" onClick={() => handleSelect('reasonForVisit', 'Comprar accesorios')} isSelected={selectedReason === 'Comprar accesorios'} />
          <ButtonBox name="Comprar Consumibles" onClick={() => handleSelect('reasonForVisit', 'Comprar consumibles')} isSelected={selectedReason === 'Comprar consumibles'} />
          <ButtonBox name="Incidencia kit IQOS" onClick={() => handleSelect('reasonForVisit', 'Incidencia kit IQOS')} isSelected={selectedReason === 'Incidencia kit IQOS'} />
          <ButtonBox name="Incidencia kit VEEV" onClick={() => handleSelect('reasonForVisit', 'Incidencia kit VEEV')} isSelected={selectedReason === 'Incidencia kit VEEV'} />
          <ButtonBox name="Incidencia Pods" onClick={() => handleSelect('reasonForVisit', 'Incidencia Pods')} isSelected={selectedReason === 'Incidencia Pods'} />
          <ButtonBox name="Retirar click & collect" onClick={() => handleSelect('reasonForVisit', 'Retirar click & collect')} isSelected={selectedReason === 'Retirar click & collect'} />
          <ButtonBox name="Devolución kit" onClick={() => handleSelect('reasonForVisit', 'Devolucion kit')} isSelected={selectedReason === 'Devolucion kit'} />
          <ButtonBox name="Devolución veev" onClick={() => handleSelect('reasonForVisit', 'Devolucion veev')} isSelected={selectedReason === 'Devolucion veev'} />
          <ButtonBox name="Devolución accesorio" onClick={() => handleSelect('reasonForVisit', 'Devolucion accesorio')} isSelected={selectedReason === 'Devolucion accesorio'} />
          <ButtonBox name="Duda funcionamiento" onClick={() => handleSelect('reasonForVisit', 'Duda funcionamiento')} isSelected={selectedReason === 'Duda funcionamiento'} />
          <ButtonBox name="Dispositivo sucio" onClick={() => handleSelect('reasonForVisit', 'Dispositivo sucio')} isSelected={selectedReason === 'Dispositivo sucio'} />
          <ButtonBox name="Información sobre IQOS" onClick={() => handleSelect('reasonForVisit', 'Informacion sobre IQOS')} isSelected={selectedReason === 'Informacion sobre IQOS'} />
          <ButtonBox name="Información sobre VEEV" onClick={() => handleSelect('reasonForVisit', 'Informacion sobre VEEV')} isSelected={selectedReason === 'Informacion sobre VEEV'} />
          <ButtonBox name="Información sobre promociones" onClick={() => handleSelect('reasonForVisit', 'Informacion sobre promociones')} isSelected={selectedReason === 'Informacion sobre promociones'} />
        </div>
      </div>

      <div className="mb-4 flex flex-col">
        <label className="text-center text-2xl font-bold mb-4">Resultado:</label>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <ButtonBox name="Venta" onClick={() => handleSelect('outcome', 'venta')} isSelected={selectedOutcome === 'venta'} />
          <ButtonBox name="Venta con cupones" onClick={() => handleSelect('outcome', 'venta con cupones')} isSelected={selectedOutcome === 'venta con cupones'} />
          <ButtonBox name="Necesita Pensar" onClick={() => handleSelect('outcome', 'Necesita Pensar')} isSelected={selectedOutcome === 'Necesita Pensar'} />
          <ButtonBox name="Swap IQOS" onClick={() => handleSelect('outcome', 'Swap IQOS')} isSelected={selectedOutcome === 'cambio'} />
          <ButtonBox name="Swap Veev" onClick={() => handleSelect('outcome', 'Swap Veev')} isSelected={selectedOutcome === 'cambio'} />
          <ButtonBox name="Devolución" onClick={() => handleSelect('outcome', 'devolución')} isSelected={selectedOutcome === 'devolución'} />
          <ButtonBox name="Información" onClick={() => handleSelect('outcome', 'información')} isSelected={selectedOutcome === 'información'} />
          <ButtonBox name="No Interesa" onClick={() => handleSelect('outcome', 'No Interesa')} isSelected={selectedOutcome === 'No Interesa'} />
          <ButtonBox name="Recuperado" onClick={() => handleSelect('outcome', 'Recuperado')} isSelected={selectedOutcome === 'Recuperado'} />
          <ButtonBox name="At Cliente Resuelto IQOS" onClick={() => handleSelect('outcome', 'At Cliente Resuelto IQOS')} isSelected={selectedOutcome === 'At Cliente Resuelto IQOS'} />
          <ButtonBox name="At Cliente Resuelto VEEV" onClick={() => handleSelect('outcome', 'At Cliente Resuelto VEEV')} isSelected={selectedOutcome === 'At Cliente Resuelto VEEV'} />
          <ButtonBox name="At Cliente Redirigido" onClick={() => handleSelect('outcome', 'At Cliente Redirigido')} isSelected={selectedOutcome === 'At Cliente Redirigido'} />
          <ButtonBox name="Limpieza" onClick={() => handleSelect('outcome', 'Limpieza')} isSelected={selectedOutcome === 'Limpieza'} />
          <ButtonBox name="Tabaco Atascado" onClick={() => handleSelect('outcome', 'Tabaco Atascado')} isSelected={selectedOutcome === 'Tabaco Atascado'} />
          <ButtonBox name="Cliente Turista Sin Iluma en su País" onClick={() => handleSelect('outcome', 'Cliente Turista Sin Iluma en su Pais')} isSelected={selectedOutcome === 'Cliente Turista Sin Iluma en su Pais'} />
          <ButtonBox name="Herramienta de Extracción Terea" onClick={() => handleSelect('outcome', 'Herramienta de Extraccion Terea')} isSelected={selectedOutcome === 'Herramienta de Extraccion Terea'} />
        </div>
      </div>

      <div className="mb-4 flex flex-col">
        <label className="text-center text-2xl font-bold mb-4">Actualización de Firmware:</label>
        <div className="grid grid-cols-2 gap-4">
          <ButtonBox name="Sí" onClick={() => handleSelect('firmwareUpdate', true)} isSelected={selectedFirmwareUpdate === true} />
          <ButtonBox name="No" onClick={() => handleSelect('firmwareUpdate', false)} isSelected={selectedFirmwareUpdate === false} />
        </div>
      </div>

      <div className="mb-4 flex flex-col">
        <label className="text-center text-2xl font-bold mb-4">Check In:</label>
        <div className="grid grid-cols-2 gap-4">
          <ButtonBox name="Sí" onClick={() => handleSelect('checkIn', true)} isSelected={selectedCheckIn === true} />
          <ButtonBox name="No" onClick={() => handleSelect('checkIn', false)} isSelected={selectedCheckIn === false} />
        </div>
      </div>

      <div className="mb-4 flex flex-col">
        <label className="text-center text-2xl font-bold mb-4">Prueba de Producto:</label>
        <div className="grid grid-cols-2 gap-4">
          <ButtonBox name="Sí" onClick={() => handleSelect('productTest', true)} isSelected={selectedProductTest === true} />
          <ButtonBox name="No" onClick={() => handleSelect('productTest', false)} isSelected={selectedProductTest === false} />
        </div>
      </div>

      {selectedProductTest === true && (
        <>
          <div className="mb-4 flex flex-col">
            <label className="text-center text-2xl font-bold mb-4">Prueba 1:</label>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <CardSelected image={levia} title="Levia" onClick={() => handleSelect('test1', 'Levia')} isSelected={selectedTest1 === 'Levia'} />
              <CardSelected image={vPodBlueMint} title="Blue Mint" onClick={() => handleSelect('test1', 'Blue Mint')} isSelected={selectedTest1 === 'Blue Mint'} />
              <CardSelected image={vPodBlueBerry} title="Blueberry" onClick={() => handleSelect('test1', 'Blueberry')} isSelected={selectedTest1 === 'Blueberry'} />
              <CardSelected image={vPodClassicTobacco} title="Classic Tobacco" onClick={() => handleSelect('test1', 'Classic Tobacco')} isSelected={selectedTest1 === 'Classic Tobacco'} />
              <CardSelected image={vPodMango} title="Mango" onClick={() => handleSelect('test1', 'Mango')} isSelected={selectedTest1 === 'Mango'} />
              <CardSelected image={vPodMelonCoconut} title="Melón y Coco" onClick={() => handleSelect('test1', 'Melón y Coco')} isSelected={selectedTest1 === 'Melón y Coco'} />
              <CardSelected image={vPodPassionFruit} title="Passion Fruit, Kiwi & Guava" onClick={() => handleSelect('test1', 'Passion Fruit, Kiwi & Guava')} isSelected={selectedTest1 === 'Passion Fruit, Kiwi & Guava'} />
              <CardSelected image={vPodPineappleAndLemon} title="Piña Limón" onClick={() => handleSelect('test1', 'Piña Limón')} isSelected={selectedTest1 === 'Piña Limón'} />
              <CardSelected image={vPodStrawberry} title="Strawberry" onClick={() => handleSelect('test1', 'Strawberry')} isSelected={selectedTest1 === 'Strawberry'} />
              <CardSelected image={vPodWatermelon} title="Watermelon" onClick={() => handleSelect('test1', 'Watermelon')} isSelected={selectedTest1 === 'Watermelon'} />
              <CardSelected image={amber} title="Amber" onClick={() => handleSelect('test1', 'Amber')} isSelected={selectedTest1 === 'Amber'} />
              <CardSelected image={russet} title="Russet" onClick={() => handleSelect('test1', 'Russet')} isSelected={selectedTest1 === 'Russet'} />
              <CardSelected image={sienna} title="Sienna" onClick={() => handleSelect('test1', 'Sienna')} isSelected={selectedTest1 === 'Sienna'} />
              <CardSelected image={softFuse} title="Soft Fuse" onClick={() => handleSelect('test1', 'Soft Fuse')} isSelected={selectedTest1 === 'Soft Fuse'} />
              <CardSelected image={teak} title="Teak" onClick={() => handleSelect('test1', 'Teak')} isSelected={selectedTest1 === 'Teak'} />
              <CardSelected image={turquoise} title="Turquoise" onClick={() => handleSelect('test1', 'Turquoise')} isSelected={selectedTest1 === 'Turquoise'} />
              <CardSelected image={warmFuse} title="Warm Fuse" onClick={() => handleSelect('test1', 'Warm Fuse')} isSelected={selectedTest1 === 'Warm Fuse'} />
              <CardSelected image={yellow} title="Yellow" onClick={() => handleSelect('test1', 'Yellow')} isSelected={selectedTest1 === 'Yellow'} />
            </div>
          </div>

          <div className="mb-4 flex flex-col">
            <label className="text-center text-2xl font-bold mb-4">Prueba 2:</label>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <CardSelected image={levia} title="Levia" onClick={() => handleSelect('test2', 'Levia')} isSelected={selectedTest2 === 'Levia'} />
              <CardSelected image={vPodBlueMint} title="Blue Mint" onClick={() => handleSelect('test2', 'Blue Mint')} isSelected={selectedTest2 === 'Blue Mint'} />
              <CardSelected image={vPodBlueBerry} title="Blueberry" onClick={() => handleSelect('test2', 'Blueberry')} isSelected={selectedTest2 === 'Blueberry'} />
              <CardSelected image={vPodClassicTobacco} title="Classic Tobacco" onClick={() => handleSelect('test2', 'Classic Tobacco')} isSelected={selectedTest2 === 'Classic Tobacco'} />
              <CardSelected image={vPodMango} title="Mango" onClick={() => handleSelect('test2', 'Mango')} isSelected={selectedTest2 === 'Mango'} />
              <CardSelected image={vPodMelonCoconut} title="Melón y Coco" onClick={() => handleSelect('test2', 'Melón y Coco')} isSelected={selectedTest2 === 'Melón y Coco'} />
              <CardSelected image={vPodPassionFruit} title="Passion Fruit, Kiwi & Guava" onClick={() => handleSelect('test2', 'Passion Fruit, Kiwi & Guava')} isSelected={selectedTest2 === 'Passion Fruit, Kiwi & Guava'} />
              <CardSelected image={vPodPineappleAndLemon} title="Piña Limón" onClick={() => handleSelect('test2', 'Piña Limón')} isSelected={selectedTest2 === 'Piña Limón'} />
              <CardSelected image={vPodStrawberry} title="Strawberry" onClick={() => handleSelect('test2', 'Strawberry')} isSelected={selectedTest2 === 'Strawberry'} />
              <CardSelected image={vPodWatermelon} title="Watermelon" onClick={() => handleSelect('test2', 'Watermelon')} isSelected={selectedTest2 === 'Watermelon'} />
              <CardSelected image={amber} title="Amber" onClick={() => handleSelect('test2', 'Amber')} isSelected={selectedTest2 === 'Amber'} />
              <CardSelected image={russet} title="Russet" onClick={() => handleSelect('test2', 'Russet')} isSelected={selectedTest2 === 'Russet'} />
              <CardSelected image={sienna} title="Sienna" onClick={() => handleSelect('test2', 'Sienna')} isSelected={selectedTest2 === 'Sienna'} />
              <CardSelected image={softFuse} title="Soft Fuse" onClick={() => handleSelect('test2', 'Soft Fuse')} isSelected={selectedTest2 === 'Soft Fuse'} />
              <CardSelected image={teak} title="Teak" onClick={() => handleSelect('test2', 'Teak')} isSelected={selectedTest2 === 'Teak'} />
              <CardSelected image={turquoise} title="Turquoise" onClick={() => handleSelect('test2', 'Turquoise')} isSelected={selectedTest2 === 'Turquoise'} />
              <CardSelected image={warmFuse} title="Warm Fuse" onClick={() => handleSelect('test2', 'Warm Fuse')} isSelected={selectedTest2 === 'Warm Fuse'} />
              <CardSelected image={yellow} title="Yellow" onClick={() => handleSelect('test2', 'Yellow')} isSelected={selectedTest2 === 'Yellow'} />
            </div>
          </div>
        </>
      )}

      <div className="flex space-x-4">
        <button
          onClick={handleBack}
          className="w-32 h-12 bg-cyanCustom text-white font-semibold rounded-md shadow-md transition-all hover:bg-cyan-500 mb-4"
        >
          Volver
        </button>
        <button
          onClick={handleNext}
          disabled={!isFormComplete()}
          className={`w-32 h-12 ${isFormComplete() ? 'bg-cyanCustom' : 'bg-gray-400'} text-white font-semibold rounded-md shadow-md transition-all hover:bg-cyan-500 mb-4`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Information;