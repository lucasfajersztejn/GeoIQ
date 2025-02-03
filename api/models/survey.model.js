const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
  date: { type: String, required: true }, 
  time: { type: String, required: true }, 
  salesPoint: { type: String, required: true },
  seller: { type: String, required: true },
  clientType: { type: String, enum: ['Las', 'Lau', 'Vaper'], required: true }, 
  consumerType: { type: String, enum: ['Poli SFP', 'Poli CC', 'Exclusivo', ""], required: false, default: "" },
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
  productTest: { type: Boolean, required: true, default: false }, // Prueba de producto (sí/no)
  firmwareUpdate: { type: Boolean, required: true, default: false }, 
  checkIn: { type: Boolean, required: true, default: false },
  deviceSales: { type: String, required: false}, // Lista de dispositivos vendidos en formato "nombre (cantidad)"
  accessorySales: { type: String, required: false}, // Lista de accesorios vendidos en formato "nombre (cantidad)"
}, { timestamps: true }); // timestamps agrega automáticamente createdAt y updatedAt

module.exports = mongoose.model('Survey', surveySchema);