import mongoose from "mongoose";

const rutasSchema = mongoose.Schema(
  {
    NivelRuta:{
      type: String,
      required: [true, 'El Nivel de Ruta es Obligatorio'],
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

const Rutas = mongoose.model( 'nivelrutas' , rutasSchema , 'nivelrutas');

export default Rutas;