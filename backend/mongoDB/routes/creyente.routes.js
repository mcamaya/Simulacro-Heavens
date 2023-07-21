import express from "express";
const router = express.Router();

import {validateDocuments} from "../../middlewares/validate.documents.js";
import {check} from 'express-validator';
import { getCreyente , oneCreyente, postCreyente } from "../controllers/creyente.controllers.js";
import Creyente from "./../models/Creyente.js";
import Ministerio from "./../models/Ministerio.js";
import Nivel from './../models/Nivel.js';
import Ruta from './../models/Ruta.js';

const path = `/api/creyentes/`;

router.get(path, getCreyente);
router.get(`${path}:id`, oneCreyente);
router.post(`${path}`, [
  check('Nombre', 'El Nombre no es valido').not().isEmpty(),
  check('Documento', 'El Documento no es Valido').custom(async(Documento = '')=>{
    const existeDocumento = await Creyente.findOne({Documento});
    if(existeDocumento){
      throw new Error(`El documento ${Documento} ya esta registrado en la base de datos`)
    }
  }),
  check('Ministerio').custom(async(min = '')=>{
    const existeMinisterio = await Ministerio.findOne({min});
    if(existeMinisterio){
      throw new Error(`El Ministerio ${min} no esta registrado en la base de datos`)
    }
  }),
  check('NivelFormacion').custom(async(niv = '')=>{
    const existeFormacion = await Nivel.findOne({niv});
    if(existeFormacion){
      throw new Error(`El Nivel de Formacion ${niv} no esta registrado en la base de datos`)
    }
  }),
  check('NivelRuta').custom(async(rut = '')=>{
    const existeRuta = await Ruta.findOne({rut});
    if(existeRuta){
      throw new Error(`El Nivel de Ruta ${rut} no esta registrado en la base de datos`)
    }
  }),
  validateDocuments
],postCreyente);

export default router;