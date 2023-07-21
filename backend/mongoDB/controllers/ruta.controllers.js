import Rutas from "./../models/Rutas.js";

export const getRutas = async (req, res) => {
  const rutas = await Rutas.find();
  res.json(rutas);
};

export const oneRutas = async (req,res) => {
  try {
    const rutas = await Rutas.findOne({_id:req.params.id});
    res.status(200).json(rutas);
  } catch (error) {
    res.status(404).json({msg: "La Ruta no se encuentra registrada"})
  }
};

export const postRutas = async (req, res) => {
  const {NivelRuta} = req.body;
  const ruta = new Rutas({NivelRuta});

  //Verificar si el correo ya existe (duplicado)
  const existeRuta = await Rutas.findOne({Email});
  if (existeRuta) {
    return res.status(400).json({msg: "El nivel de Ruta ya se encuentra registrado"});
  };

  await ruta.save();
  res.json({
    "message " : "Nivel de Ruta registrado Satisfactoriamente",
    NivelRuta
  }); 
};

export const deleteRutas = async (req, res) => {
  try {
    await Rutas.deleteOne({_id:req.params.id});//por si no funciona se agrega _ 
    res.status(204).send();
  } catch (error) {
    res.status(404).send({error:"La Ruta no se encuentra registrada"});
  }
};

export const updateRutas = async (req, res) => {
  try {
  const ruta = await Rutas.findOne({_id:req.params.id});
  if (req.body.NivelRuta){
    ruta.NivelRuta = req.body.NivelRuta;
  };
  await ruta.save()
  res.status(200).send(ruta)
} catch (error) {
  res.status(404).send({error: "La Ruta no se encuentra registrada"});
}
};