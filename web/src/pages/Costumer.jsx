import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SurveyContext } from '../context/Survey.context';
import ButtonBox from '../components/Ui/Button/ButtonBox';

const Costumer = () => {
  const { surveyData, setSurveyData } = useContext(SurveyContext);
  const navigate = useNavigate();

  const handleSelect = (name, value) => {
    setSurveyData({ ...surveyData, [name]: value });
  };

  const isFormComplete = () => {
    return surveyData.clientType && surveyData.clientOrigin && surveyData.ageGroup && surveyData.groupSize;
  };

  const handleNext = () => {
    if (isFormComplete()) {
      navigate('/information');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        <label>Tipo de Cliente:</label>
        <ButtonBox name="LAS" onClick={() => handleSelect('clientType', 'Las')} />
        <ButtonBox name="LAU" onClick={() => handleSelect('clientType', 'Lau')} />
        <ButtonBox name="Vaper" onClick={() => handleSelect('clientType', 'Vaper')} />
      </div>
      <div className="mb-4">
        <label>Origen del Cliente:</label>
        <ButtonBox name="Local" onClick={() => handleSelect('clientOrigin', 'Local')} />
        <ButtonBox name="Turista" onClick={() => handleSelect('clientOrigin', 'Turista')} />
      </div>
      <div className="mb-4">
        <label>Grupo de Edad:</label>
        <ButtonBox name="18-29" onClick={() => handleSelect('ageGroup', '18-29')} />
        <ButtonBox name="30-39" onClick={() => handleSelect('ageGroup', '30-39')} />
        <ButtonBox name="40-49" onClick={() => handleSelect('ageGroup', '40-49')} />
        <ButtonBox name="50+" onClick={() => handleSelect('ageGroup', '50+')} />
      </div>
      <div className="mb-4">
        <label>Cantidad de Personas Atendidas:</label>
        <ButtonBox name="1" onClick={() => handleSelect('groupSize', '1')} />
        <ButtonBox name="2" onClick={() => handleSelect('groupSize', '2')} />
        <ButtonBox name="3" onClick={() => handleSelect('groupSize', '3')} />
        <ButtonBox name="4" onClick={() => handleSelect('groupSize', '4')} />
        <ButtonBox name="5+" onClick={() => handleSelect('groupSize', '5+')} />
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