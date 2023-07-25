import mongoose from "mongoose";

const nivelsSchema = mongoose.Schema(
  {
    NivelFormacion:{
      type: String,
      required: [true, 'El Nivel de Formacion es Obligatorio'],
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

const NivelFormaciones = mongoose.model( 'nivelformacions' , nivelsSchema );

export default NivelFormaciones;