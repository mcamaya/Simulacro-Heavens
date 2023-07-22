import { methodsHTTP as barriosController } from "../controllers/barrios.controllers.js";
import { Router } from "express";

const router = Router();

router.get("/", barriosController.getBarrios);
router.get("/:id", barriosController.getOneBarrio);
router.post("/", barriosController.postBarrios);
router.delete("/:id", barriosController.deleteBarrios);
router.put("/:id", barriosController.updateBarrios);

export default router;