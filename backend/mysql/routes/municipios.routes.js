import { Router } from "express";
import { methodsHTTP as muniController } from "../controllers/municipios.controllers.js";

const router = Router();

router.get("/", muniController.getMunicipios);
router.get("/:id", muniController.getOneMunicipio);

export default router;