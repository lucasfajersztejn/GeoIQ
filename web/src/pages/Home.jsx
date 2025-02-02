import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SurveyContext } from '../context/Survey.context';
import ButtonBoxLink from '../components/Ui/ButtonBox/ButtonBoxLink';

const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0]; // Formato YYYY-MM-DD
};

const getCurrentTime = () => {
  const date = new Date();
  return date.toTimeString().split(' ')[0]; // Formato HH:MM:SS
};

const Home = () => {
  const { setSurveyData } = useContext(SurveyContext);
  const navigate = useNavigate();

  const handleNewSurvey = () => {
    setSurveyData({
      date: getCurrentDate(),
      time: getCurrentTime(),
      salesPoint: 'El corte ingles brand retail',
      seller: 'Lucas',
      clientType: '',
      consumerType: '',
      clientOrigin: '',
      ageGroup: '',
      groupSize: '',
      deviceSales: [],
      accessorySales: [],
      // Agrega más campos según sea necesario
    });
    navigate('/costumer');
  };

  return (
    <>
      <button
        onClick={handleNewSurvey}
        className="w-32 h-12 bg-cyanCustom text-white font-semibold rounded-md shadow-md transition-all hover:bg-cyan-500"
      >
        Nueva Encuesta
      </button>
      <ButtonBoxLink name='GeoIQOS Realizados' to='/results'/>
    </>
  );
};

export default Home;