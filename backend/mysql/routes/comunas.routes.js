import { methodsHTTP as comunasController } from "../controllers/comunas.controllers.js";
import { Router } from "express";

const router = Router();

router.get("/", comunasController.getComunas);
router.get("/:id", comunasController.getOneComuna);
router.post("/", comunasController.postComunas);
router.delete("/:id", comunasController.deleteComunas);
router.put("/:id", comunasController.updateComunas);

export default router;