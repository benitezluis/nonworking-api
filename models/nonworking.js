import mongoose, { Schema } from "mongoose";

const schemaNonWorking = new Schema({
  motivo: { type: String, default: null, required: true },
  tipo: { type: String },
  dia: { type: Number },
  id: { type: String, required: true },
  mes: { type: Number },
  info: { type: String },
});

export default mongoose.model("nonworking", schemaNonWorking);
