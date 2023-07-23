import { methodsHTTP as creyentesController } from "../controllers/creyentes.controllers.js";
import { Router } from "express";

const router = Router();

router.get("/", creyentesController.getCreyentes);
router.get("/:id", creyentesController.getCreyentes);
router.post("/", creyentesController.postCreyentes);
router.delete("/:id", creyentesController.deleteCreyentes);
router.put("/:id", creyentesController.updateCreyentes);

export default router;