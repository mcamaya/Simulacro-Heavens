import mongoose from 'mongoose';

const creyentesSchema = mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre es Obligatorio'],
      trim: true
    },
    Documento:{
      type: Number,
      required: [true, 'El Documento es Obligatorio'],
      trim: true,
      unique: true,
    },
    Ministerio:{
      type: String,
      required: [true, 'El Ministerio es Obligatorio'],
      trim: true,
    },
    NivelFormacion:{
      type: String,
      required: [true, 'El nivel de Formacion es Obligatorio'],
      trim: true
    },
    Edad:{
      type: Number,
      required: [true, 'La edad es Obligatoria'],
      trim: true
    },
    NivelRuta:{
      type: String,
      required: [true, 'El nivel de Ruta es Obligatorio'],
      trim: true
    },
  },
  {
    timestamps: true,
  }
);

const Creyentes = mongoose.model('creyentes', creyentesSchema, 'creyentes');

export default Creyentes;