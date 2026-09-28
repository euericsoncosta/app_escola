import { Router } from "express";
import emprestimoController from "../controllers/emprestimoController.js";

const router = Router();

router.get("/", emprestimoController.index);
router.post("/", emprestimoController.cadastrarEmprestimo);

router.delete("/:id", emprestimoController.devolverEmprestimo);

export default router;
