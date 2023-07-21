import mongoose from "mongoose";

const dbCnxMongo = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB online");
  }catch(error){
    console.error(error);
    throw new Error('La base de datos no se puede conectar');
  }
}

export default dbCnxMongo;