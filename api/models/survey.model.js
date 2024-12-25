const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
  date: { type: String, required: true }, 
  time: { type: String, required: true }, 
  salesPoint: { type: String, required: true },
  seller: { type: String, required: true },
  clientType: { type: String, enum: ['Las', 'Lau', 'Vaper'], required: true }, 
  clientOrigin: { type: String, enum: ['Local', 'Turista'], required: true },
  ageGroup: { 
    type: String, 
    enum: ['18-29', '30-39', '40-49', '50+'], 
    required: true 
  }, 
  groupSize: { 
    type: String, 
    enum: ['1', '2', '3', '4', '5+'], 
    required: true 
  }, 
  reasonForVisit: { type: String, required: true }, // Motivo de atención (opciones varias)
  outcome: { type: String, required: true }, // Resultado (opciones varias)
  productTest: { type: Boolean, required: true }, // Prueba de producto (sí/no)
  deviceSales: [
    {
      name: String, // Nombre del dispositivo
      quantity: { type: Number, default: 0 }, // Cantidad vendida
    },
  ], // Lista de dispositivos vendidos
  accessorySales: [
    {
      name: String, // Nombre del accesorio
      quantity: { type: Number, default: 0 }, // Cantidad vendida
    },
  ], // Lista de accesorios vendidos
}, { timestamps: true }); // timestamps agrega automáticamente createdAt y updatedAt

module.exports = mongoose.model('Survey', surveySchema);
