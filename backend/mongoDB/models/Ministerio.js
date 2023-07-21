import mongoose from "mongoose";

const ministerioSchema = mongoose.Schema(
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

const Ministerio = mongoose.model( 'ministerios' , ministerioSchema, );

export default Ministerio;