import { Router } from "express";
import {
    borrarProducto,
    crearProducto,
    editarProducto,
    obtenerProductos,
} from "../controllers/productos.controllers";

const router = Router();

// Rutas
router.route("/productos").get(obtenerProductos).post(crearProducto);

// delete and put
router.route("/productos/:id").delete(borrarProducto).put(editarProducto);

export default router;
