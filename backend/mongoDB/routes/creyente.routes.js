import express from "express";
const router = express.Router();
import {validateDocuments} from "../../middlewares/validate.documents.js";
import {check} from 'express-validator';
import { getCreyentes , oneCreyentes, postCreyentes, deleteCreyentes , updateCreyentes } from "../controllers/creyente.controllers.js";
import { getMinisterios , oneMinisterios , postMinisterios ,  deleteMinisterios , updateMinisterios} from "./../controllers/ministerio.controllers.js";
import { getNiveles , oneNiveles , postNiveles , deleteNiveles , updateNiveles } from "./../controllers/nivel.controllers.js";
import { getRutas , oneRutas , postRutas ,  deleteRutas , updateRutas} from "./../controllers/ruta.controllers.js"; 
import Creyente from "./../models/Creyentes.js";
import Ministerio from "./../models/Ministerios.js";
import Nivel from './../models/Nivels.js';
import Ruta from './../models/Rutas.js';

const pathCreyentes = `/api/creyentes/`;
const pathMinisterios = `/api/ministerios/`;
const pathNiveles = `/api/niveles/`;
const pathRutas = `/api/rutas/`;

//Rutas de Creyentes desde el Backend
router.get(pathCreyentes, getCreyentes);
router.get(`${pathCreyentes}:id`, oneCreyentes);
router.post(`${pathCreyentes}`, [
  check('Nombre', 'El Nombre no es valido').not().isEmpty(),
  check('Documento', 'El Documento no es Valido').custom(async(Documento = '')=>{
    const existeDocumento = await Creyente.findOne({Documento});
    if(existeDocumento){
      throw new Error(`El documento "${Documento}" ya esta registrado en la base de datos`)
    }
  }),
  check('Ministerio').custom(async(min = '')=>{
    const existeMinisterio = await Ministerio.findOne({min});
    if(!existeMinisterio){
      throw new Error(`El Ministerio ${min} no esta registrado en la base de datos`)
    }
  }),
  check('NivelFormacion').custom(async(niv = '')=>{
    const existeFormacion = await Nivel.findOne({niv});
    if(!existeFormacion){
      throw new Error(`El Nivel de Formacion ${niv} no esta registrado en la base de datos`)
    }
  }),
  check('NivelRuta').custom(async(rut = '')=>{
    const existeRuta = await Ruta.findOne({rut});
    if(!existeRuta){
      throw new Error(`El Nivel de Ruta ${rut} no esta registrado en la base de datos`)
    }
  }),
  validateDocuments
],postCreyentes);
router.delete(`${pathCreyentes}:id`,deleteCreyentes );
router.patch(`${pathCreyentes}:id`, updateCreyentes);

//Rutas de Ministerios desde el Backend 
router.get(`${pathMinisterios}`,getMinisterios );
router.get(`${pathMinisterios}:id`,oneMinisterios );
router.post(`${pathMinisterios}`,postMinisterios );
router.delete(`${pathMinisterios}:id`,deleteMinisterios );
router.patch(`${pathMinisterios}:id`,updateMinisterios );

//Rutas de Niveles desde el backend 
router.get(`${pathNiveles}`,getNiveles );
router.get(`${pathNiveles}:id`,oneNiveles );
router.post(`${pathNiveles}`,postNiveles );
router.delete(`${pathNiveles}:id`,deleteNiveles );
router.patch(`${pathNiveles}:id`,updateNiveles );

//Rutas para las Rutas (Valga la Redundancia ) desde el Backend
router.get(`${pathRutas}`,getRutas );
router.get(`${pathRutas}:id`,oneRutas );
router.post(`${pathRutas}`,postRutas );
router.delete(`${pathRutas}:id`,deleteRutas );
router.patch(`${pathRutas}:id`,updateRutas );


export default router;