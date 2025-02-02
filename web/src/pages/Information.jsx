import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SurveyContext } from '../context/Survey.context';
import ButtonBox from '../components/Ui/Button/ButtonBox';

const Information = () => {
  const { surveyData, setSurveyData } = useContext(SurveyContext);
  const navigate = useNavigate();
  const [selectedReason, setSelectedReason] = useState('');
  const [selectedOutcome, setSelectedOutcome] = useState('');
  const [selectedProductTest, setSelectedProductTest] = useState('');


  // const handleSelect = (name, value) => {
  //   setSurveyData({ ...surveyData, [name]: value });
  // };

  const handleSelect = (name, value) => {
    setSurveyData({ ...surveyData, [name]: value });
    if (name === 'reasonForVisit') {
      setSelectedReason(value);
    } else if (name === 'outcome') {
      setSelectedOutcome(value);
    } else if (name === 'productTest') {
      setSelectedProductTest(value);
    }
  };

  const isFormComplete = () => {
    return surveyData.reasonForVisit && surveyData.outcome && surveyData.productTest !== undefined;
  };

  const handleNext = () => {
    if (isFormComplete()) {
      navigate('/devices');
    }
  };
  const handleBack = () => {
    navigate('/costumer');
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex flex-col">
        <label className="text-center text-2xl font-bold mb-4">Motivo de Atención:</label>
        <div className="grid grid-cols-6 gap-4">
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
        <div className="grid grid-cols-6 gap-4">
          <ButtonBox name="Venta" onClick={() => handleSelect('outcome', 'venta')} isSelected={selectedOutcome === 'venta'} />
          <ButtonBox name="Venta con cupones" onClick={() => handleSelect('outcome', 'venta con cupones')} isSelected={selectedOutcome === 'venta con cupones'} />
          <ButtonBox name="Puntos IQOS CLUB" onClick={() => handleSelect('outcome', 'Puntos IQOS CLUB')} isSelected={selectedOutcome === 'Puntos IQOS CLUB'} />
          <ButtonBox name="No venta" onClick={() => handleSelect('outcome', 'no venta')} isSelected={selectedOutcome === 'no venta'} />
          <ButtonBox name="Swap IQOS" onClick={() => handleSelect('outcome', 'Swap IQOS')} isSelected={selectedOutcome === 'cambio'} />
          <ButtonBox name="Swap Veev" onClick={() => handleSelect('outcome', 'Swap Veev')} isSelected={selectedOutcome === 'cambio'} />
          <ButtonBox name="Devolución" onClick={() => handleSelect('outcome', 'devolución')} isSelected={selectedOutcome === 'devolución'} />
          <ButtonBox name="Información" onClick={() => handleSelect('outcome', 'información')} isSelected={selectedOutcome === 'información'} />
        </div>
      </div>
      <div className="mb-4 flex flex-col">
        <label className="text-center text-2xl font-bold mb-4">Prueba de Producto:</label>
        <div className="grid grid-cols-6 gap-4">
          <ButtonBox name="Sí" onClick={() => handleSelect('productTest', true)} isSelected={selectedProductTest === true} />
          <ButtonBox name="No" onClick={() => handleSelect('productTest', false)} isSelected={selectedProductTest === false} />
        </div>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleBack}
          className="w-32 h-12 bg-cyanCustom text-white font-semibold rounded-md shadow-md transition-all hover:bg-cyan-500"
        >
          Volver
        </button>
        <button
          onClick={handleNext}
          disabled={!isFormComplete()}
          className={`w-32 h-12 ${isFormComplete() ? 'bg-cyanCustom' : 'bg-gray-400'} text-white font-semibold rounded-md shadow-md transition-all hover:bg-cyan-500`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Information;