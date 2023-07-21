import Creyente from './../models/Creyente.js';

export const getCreyente = async (req, res) => {
  const creyente = await Creyente.find();
  res.json(creyente);
};

export const oneCreyente = async (req, res) => {
  try{
    const creyente = await Creyente.findOne({_id:req.params.id});
    res.status(200).json(creyente);
  } catch(error){
    res.status(404).json({msg: "El usuario no existe o no se ha creado aun"});
  }
};

export const postCreyente = async (req, res) => {
  const {Nombre, Documento, Ministerio, NivelFormacion, Edad , NivelRuta} = req.body;
  const creyente = new Creyente({Nombre, Documento, Ministerio, NivelFormacion, Edad , NivelRuta});

  await creyente.save();
  res.json({
    msg: 'Creyente creado correctamente',
    Nombre,
    Documento,
    Ministerio, 
    NivelFormacion, 
    Edad , 
    NivelRuta
  })
}