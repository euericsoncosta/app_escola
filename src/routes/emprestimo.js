import { Router } from "express";
import emprestimoController from "../controllers/emprestimoController.js";

const router = Router();

router.get("/", emprestimoController.index);
router.post("/", emprestimoController.cadastrarEmprestimo);

export default router;
