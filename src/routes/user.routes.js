import { Router } from "express";
import { crearUsuario, listarUsuarios, login } from "../controllers/user.controllers";

const router = Router();

// Rutas
router.route("/").post(login).get(listarUsuarios);
router.route("/nuevo").post(crearUsuario);

export default router;
