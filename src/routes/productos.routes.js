import { Router } from "express";
import {
    borrarProducto,
    crearProducto,
    editarProducto,
    obtenerProductos,
    obtenerUnProductos,
} from "../controllers/productos.controllers";

const router = Router();

// Rutas
router.route("/productos").get(obtenerProductos).post(crearProducto);

// delete, put and find one product
router
    .route("/productos/:id")
    .delete(borrarProducto)
    .put(editarProducto)
    .get(obtenerUnProductos);

export default router;
