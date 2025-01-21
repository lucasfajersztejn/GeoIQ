import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SurveyContext } from '../context/Survey.context';
import ButtonBox from '../components/Ui/Button/ButtonBox';

const Information = () => {
  const { surveyData, setSurveyData } = useContext(SurveyContext);
  const navigate = useNavigate();

  const handleSelect = (name, value) => {
    setSurveyData({ ...surveyData, [name]: value });
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
      <div className="mb-4">
        <label>Motivo de Atención:</label>
        <ButtonBox name="Consulta" onClick={() => handleSelect('reasonForVisit', 'Consulta')} />
        <ButtonBox name="Compra" onClick={() => handleSelect('reasonForVisit', 'Compra')} />
        <ButtonBox name="Reclamo" onClick={() => handleSelect('reasonForVisit', 'Reclamo')} />
      </div>
      <div className="mb-4">
        <label>Resultado:</label>
        <ButtonBox name="Satisfecho" onClick={() => handleSelect('outcome', 'Satisfecho')} />
        <ButtonBox name="Insatisfecho" onClick={() => handleSelect('outcome', 'Insatisfecho')} />
        <ButtonBox name="Neutral" onClick={() => handleSelect('outcome', 'Neutral')} />
      </div>
      <div className="mb-4">
        <label>Prueba de Producto:</label>
        <ButtonBox name="Sí" onClick={() => handleSelect('productTest', true)} />
        <ButtonBox name="No" onClick={() => handleSelect('productTest', false)} />
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