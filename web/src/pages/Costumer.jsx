import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SurveyContext } from '../context/Survey.context';
import ButtonBox from '../components/Ui/Button/ButtonBox';

const Costumer = () => {
  const { surveyData, setSurveyData } = useContext(SurveyContext);
  const navigate = useNavigate();
  const [selectedClientType, setSelectedClientType] = useState('');
  const [showConsumerType, setShowConsumerType] = useState(false);
  const [selectedConsumerType, setSelectedConsumerType] = useState('');

  const handleSelect = (name, value) => {
    setSurveyData(prevData => ({ ...prevData, [name]: value }));
    if (name === 'clientType') {
      setSelectedClientType(value);
      if (value === 'Vaper') {
        setShowConsumerType(true);
      } else {
        setShowConsumerType(false);
        setSelectedConsumerType("");
        setSurveyData(prevData => ({ ...prevData, consumerType: "" }));
      }
    } else if (name === 'consumerType') {
      setSelectedConsumerType(value);
    }
  };

  const isFormComplete = () => {
    if (surveyData.clientType === 'Vaper') {
      return surveyData.clientType && surveyData.clientOrigin && surveyData.ageGroup && surveyData.groupSize && surveyData.consumerType;
    }
    return surveyData.clientType && surveyData.clientOrigin && surveyData.ageGroup && surveyData.groupSize;
  };

  const handleNext = () => {
    if (isFormComplete()) {
      navigate('/information');
    } else {
      alert('Por favor, complete todos los campos requeridos.');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex flex-col">
        <label className='text-center text-2xl font-bold mb-4'>Tipo de Cliente:</label>
        <div className="grid grid-cols-3 gap-4">
          <ButtonBox name="LAS" onClick={() => handleSelect('clientType', 'Las')} isSelected={selectedClientType === 'Las'} />
          <ButtonBox name="LAU" onClick={() => handleSelect('clientType', 'Lau')} isSelected={selectedClientType === 'Lau'} />
          <ButtonBox name="Vaper" onClick={() => handleSelect('clientType', 'Vaper')} isSelected={selectedClientType === 'Vaper'} />
        </div>
      </div>
      {showConsumerType && (
        <div className="mb-4 flex flex-col">
          <label className='text-center text-2xl font-bold mb-4'>Tipo de Consumidor:</label>
          <div className="grid grid-cols-3 gap-4">  
            <ButtonBox name="Poli SFP" onClick={() => handleSelect('consumerType', 'Poli SFP')} isSelected={selectedConsumerType === 'Poli SFP'} />
            <ButtonBox name="Poli CC" onClick={() => handleSelect('consumerType', 'Poli CC')} isSelected={selectedConsumerType === 'Poli CC'} />
            <ButtonBox name="Exclusivo" onClick={() => handleSelect('consumerType', 'Exclusivo')} isSelected={selectedConsumerType === 'Exclusivo'} />
          </div>
        </div>
      )}
      <div className="mb-4 flex flex-col">
        <label className='text-center text-2xl font-bold mb-4'>Origen del Cliente:</label>
        <div className="grid grid-cols-2 gap-4">  
          <ButtonBox name="Local" onClick={() => handleSelect('clientOrigin', 'Local')} isSelected={surveyData.clientOrigin === 'Local'} />
          <ButtonBox name="Turista" onClick={() => handleSelect('clientOrigin', 'Turista')} isSelected={surveyData.clientOrigin === 'Turista'} />
        </div>
      </div>
      <div className="mb-4 flex flex-col">
        <label className='text-center text-2xl font-bold mb-4'>Grupo de Edad:</label>
        <div className="grid grid-cols-4 gap-4">  
          <ButtonBox name="18-29" onClick={() => handleSelect('ageGroup', '18-29')} isSelected={surveyData.ageGroup === '18-29'} />
          <ButtonBox name="30-39" onClick={() => handleSelect('ageGroup', '30-39')} isSelected={surveyData.ageGroup === '30-39'} />
          <ButtonBox name="40-49" onClick={() => handleSelect('ageGroup', '40-49')} isSelected={surveyData.ageGroup === '40-49'} />
          <ButtonBox name="50+" onClick={() => handleSelect('ageGroup', '50+')} isSelected={surveyData.ageGroup === '50+'} />
        </div>
      </div>
      <div className="mb-4 flex flex-col">
        <label className='text-center text-2xl font-bold mb-4'>Cantidad de Personas Atendidas:</label>
        <div className="grid grid-cols-5 gap-4">  
          <ButtonBox name="1" onClick={() => handleSelect('groupSize', '1')} isSelected={surveyData.groupSize === '1'} />
          <ButtonBox name="2" onClick={() => handleSelect('groupSize', '2')} isSelected={surveyData.groupSize === '2'} />
          <ButtonBox name="3" onClick={() => handleSelect('groupSize', '3')} isSelected={surveyData.groupSize === '3'} />
          <ButtonBox name="4" onClick={() => handleSelect('groupSize', '4')} isSelected={surveyData.groupSize === '4'} />
          <ButtonBox name="5+" onClick={() => handleSelect('groupSize', '5+')} isSelected={surveyData.groupSize === '5+'} />
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

export default Costumer;