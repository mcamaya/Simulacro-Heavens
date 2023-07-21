import mongoose from "mongoose";

const nivelSchema = mongoose.Schema(
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

const Nivel = mongoose.model( 'nivelFormacions' , nivelSchema, );

export default Nivel;