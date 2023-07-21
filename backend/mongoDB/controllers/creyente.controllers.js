import Creyentes from "./../models/Creyentes.js";

export const getCreyentes = async (req, res) => {
  const creyentes = await Creyentes.find();
  res.json(creyentes);
};

export const oneCreyentes = async (req,res) => {
  try {
    const creyentes = await Creyentes.findOne({_id:req.params.id});
    res.status(200).json(creyentes);
  } catch (error) {
    res.status(404).json({msg: "El Creyente no se encuentra registrado"})
  }
};

export const postCreyentes = async (req, res) => {
  const {Nombre, Documento, Ministerio, NivelFormacion, Edad , NivelRuta} = req.body;
  const creyente = new Creyentes({Nombre, Documento, Ministerio, NivelFormacion, Edad , NivelRuta});

  //Verificar si el correo ya existe (duplicado)
  const existeDocumento = await Creyentes.findOne({Documento});
  if (existeDocumento) {
    return res.status(400).json({msg: "El Creyente ya se encuentra registrado"});
  };
  await creyente.save();
  res.json({
    msg: 'Creyente creado correctamente',
    Nombre,
    Documento,
    Ministerio, 
    NivelFormacion, 
    Edad , 
    NivelRuta
  }); 
};

export const deleteCreyentes = async (req, res) => {
  try {
    await Creyentes.deleteOne({_id:req.params.id});//por si no funciona se agrega _ 
    res.status(204).send();
  } catch (error) {
    res.status(404).send({error:"El Creyente no se encuentra registrado"});
  }
};

export const updateCreyentes = async (req, res) => {
  try {
    const creyente = await Creyentes.findOne({_id:req.params.id});
    if (req.body.Nombre){
      creyente.Nombre = req.body.Nombre;
    };
    if (req.body.Documento){
      creyente.Documento = req.body.Documento;
    };
    if (req.body.Ministerio){
      creyente.Ministerio = req.body.Ministerio;
    };
    if (req.body.NivelFormacion){
      creyente.NivelFormacion = req.body.NivelFormacion;
    };
    if (req.body.Edad){
      creyente.Edad = req.body.Edad;
    };
    if (req.body.NivelRuta){
      creyente.NivelRuta = req.body.NivelRuta;
    };
    await creyente.save()
    res.status(200).send(creyente)
  } catch (error) {
    res.status(404).send({error: "El Creyente no se encuentra registrado"});
  }
};