import NivelFormaciones from "./../models/Nivels.js";

export const getNiveles = async (req, res) => {
  const niveles = await NivelFormaciones.find();
  res.json(niveles);
};

export const oneNiveles = async (req,res) => {
  try {
    const niveles = await NivelFormaciones.findOne({_id:req.params.id});
    res.status(200).json(niveles);
  } catch (error) {
    res.status(404).json({msg: "El Nivel de Formacion no se encuentra registrado"})
  }
};

export const postNiveles = async (req, res) => {
  const {NivelFormacion} = req.body;
  const nivel = new NivelFormaciones({NivelFormacion});

  //Verificar si la formcacion ya existe (duplicado)
  const existeFormacion = await NivelFormaciones.findOne({NivelFormacion});
  if (existeFormacion) {
    return res.status(400).json({msg: "El Nivel de Formacion ya se encuentra registrado"});
  };
  await nivel.save();
  res.json({
    msg: 'Nivel de Formacion creado correctamente',
    NivelFormacion
  }); 
};

export const deleteNiveles = async (req, res) => {
  try {
    await NivelFormaciones.deleteOne({_id:req.params.id});//por si no funciona se agrega _ 
    res.status(204).send();
  } catch (error) {
    res.status(404).send({error:"El Nivel de Formacion no se encuentra registrado"});
  }
};

export const updateNiveles = async (req, res) => {
  try {
    const nivel = await NivelFormaciones.findOne({_id:req.params.id});
    if (req.body.NivelFormacion){
      nivel.NivelFormacion = req.body.NivelFormacion;
    };
    await nivel.save()
    res.status(200).send(nivel)
  } catch (error) {
    res.status(404).send({error: "El Nivel de Formacion no se encuentra registrado"});
  }
};