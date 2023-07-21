import mongoose from "mongoose";

const ministeriosSchema = mongoose.Schema(
  {
    Ministerio:{
      type: String,
      required: [true, 'El Ministerio es Obligatorio'],
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

const Ministerios = mongoose.model( 'ministerios' , ministeriosSchema , 'ministerios' );

export default Ministerios;