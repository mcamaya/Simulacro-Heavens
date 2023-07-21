import mongoose from "mongoose";

const rutaSchema = mongoose.Schema(
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

const Ruta = mongoose.model( 'nivelRutas' , rutaSchema );

export default Ruta;