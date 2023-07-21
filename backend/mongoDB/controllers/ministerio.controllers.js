import Ministerios from "../models/Ministerios.js";

export const getMinisterios = async (req, res) => {
  const ministerios = await Ministerios.find();
  res.json(ministerios);
};

export const oneMinisterios = async (req,res) => {
  try {
    const ministerios = await Ministerios.findOne({_id:req.params.id});
    res.status(200).json(ministerios);
  } catch (error) {
    res.status(404).json({msg: "El Ministerio no existe"})
  }
};

export const postMinisterios = async (req, res) => {
  const {Ministerio} = req.body;
  const ministerio = new Ministerios({Ministerio});

  //Verificar si el Ministerio ya existe (duplicado)
  const existeMinisterio = await Ministerios.findOne({Ministerio});
  if (existeMinisterio) {
    return res.status(400).json({msg: "El ministerio ya esta registrado"});
  }

  await ministerio.save();
  res.json({
    "message " : "El ministerio se registro satisfactoriamente",
    Ministerio
  }); 
};

export const deleteMinisterios = async (req, res) => {
  try {
    await Ministerios.deleteOne({_id:req.params.id});//por si no funciona se agrega _ 
    res.status(204)
    res.json({
      msg : "El registro se borro satisfactoriamente"
    });
  } catch (error) {
    res.status(404).send({error:"El Ministerio no existe"});
  }
};

export const updateMinisterios = async (req, res) => {
  try {
  const ministerio = await Ministerios.findOne({_id:req.params.id});
  if (req.body.Ministerio){
    ministerio.Ministerio = req.body.Ministerio;
  };
  await ministerio.save()
  res.status(200).send(ministerio)
} catch (error) {
  res.status(404).send({error: "El Ministerio No existe"});
}
};