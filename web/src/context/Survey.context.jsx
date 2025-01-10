import React, { createContext, useState } from 'react';

export const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const getCurrentDate = () => {
    const date = new Date();
    return date.toISOString().split('T')[0]; // Formato YYYY-MM-DD
  };

  const getCurrentTime = () => {
    const date = new Date();
    return date.toTimeString().split(' ')[0]; // Formato HH:MM:SS
  };

  const [surveyData, setSurveyData] = useState({
    date: getCurrentDate(),
    time: getCurrentTime(),
    salesPoint: 'El corte ingles brand retail',
    seller: 'Lucas',
    clientType: '',
    clientOrigin: '',
    ageGroup: '',
    groupSize: '',
    // Agrega más campos según sea necesario
  });

  return (
    <SurveyContext.Provider value={{ surveyData, setSurveyData }}>
      {children}
    </SurveyContext.Provider>
  );
};