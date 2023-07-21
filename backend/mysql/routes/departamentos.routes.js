import { methodsHTTP as depaController } from "../controllers/departamentos.controllers.js";
import { Router } from "express";

const router = Router();

router.get("/", depaController.getDepartamentos);
router.get("/:id", depaController.getOneDepartamento);
router.post("/", depaController.postDepartamentos);
router.delete("/:id", depaController.deleteDepartamentos);
router.put("/:id", depaController.updateDepartamentos);

export default router;