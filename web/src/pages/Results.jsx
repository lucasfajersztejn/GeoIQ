import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Results = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/surveys');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-center text-2xl font-bold mb-4">Resultados de GeoIQOS</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200">Día</th>
              <th className="py-2 px-4 border-b border-gray-200">Hora</th>
              <th className="py-2 px-4 border-b border-gray-200">Tipo de Cliente</th>
              <th className="py-2 px-4 border-b border-gray-200">Tipo de Consumidor</th>
              <th className="py-2 px-4 border-b border-gray-200">Origen del Cliente</th>
              <th className="py-2 px-4 border-b border-gray-200">Grupo de Edad</th>
              <th className="py-2 px-4 border-b border-gray-200">Tamaño del Grupo</th>
              <th className="py-2 px-4 border-b border-gray-200">Motivo de Visita</th>
              <th className="py-2 px-4 border-b border-gray-200">Resultado</th>
              <th className="py-2 px-4 border-b border-gray-200">Prueba de Producto</th>
              <th className="py-2 px-4 border-b border-gray-200">Actualización de Firmware</th>
              <th className="py-2 px-4 border-b border-gray-200">Check In</th>
              <th className="py-2 px-4 border-b border-gray-200">Ventas de Dispositivos</th>
              <th className="py-2 px-4 border-b border-gray-200">Ventas de Accesorios</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td className="py-2 px-4 border-b text-center border-gray-200">{item.date}</td>
                <td className="py-2 px-4 border-b text-center border-gray-200">{item.time}</td>
                <td className="py-2 px-4 border-b text-center border-gray-200">{item.clientType}</td>
                <td className="py-2 px-4 border-b text-center border-gray-200">{item.consumerType}</td>
                <td className="py-2 px-4 border-b text-center border-gray-200">{item.clientOrigin}</td>
                <td className="py-2 px-4 border-b text-center border-gray-200">{item.ageGroup}</td>
                <td className="py-2 px-4 border-b text-center border-gray-200">{item.groupSize}</td>
                <td className="py-2 px-4 border-b text-center border-gray-200">{item.reasonForVisit}</td>
                <td className="py-2 px-4 border-b text-center border-gray-200">{item.outcome}</td>
                <td className="py-2 px-4 border-b text-center border-gray-200">{item.productTest ? 'Sí' : 'No'}</td>
                <td className="py-2 px-4 border-b text-center border-gray-200">{item.firmwareUpdate ? 'Sí' : 'No'}</td>
                <td className="py-2 px-4 border-b text-center border-gray-200">{item.checkIn ? 'Sí' : 'No'}</td>
                <td className="py-2 px-4 border-b text-center border-gray-200">{item.deviceSales}</td>
                <td className="py-2 px-4 border-b text-center border-gray-200">{item.accessorySales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="m-6 px-4 py-2 bg-cyanCustom text-white font-semibold rounded-md shadow-md transition-all hover:bg-cyan-500"
      >
        Volver
      </button>
    </div>
  );
};

export default Results;