import { Router } from "express";
import {
    borrarProducto,
    crearProducto,
    obtenerProductos,
} from "../controllers/productos.controllers";

const router = Router();

// Rutas
router.route("/productos").get(obtenerProductos).post(crearProducto);

// delete
router.route("/productos/:id").delete(borrarProducto);

export default router;
