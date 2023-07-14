import { Router } from "express";
import {
    borrarProducto,
    crearProducto,
    editarProducto,
    obtenerProductos,
    obtenerUnProductos,
} from "../controllers/productos.controllers";
import validarProducto from "../helpers/validarProducto";
import validarJWT from "../helpers/token-verify";

const router = Router();

// Rutas
router
    .route("/productos")
    .get(obtenerProductos)
    .post([validarJWT, validarProducto], crearProducto);

// delete, put and find one product
router
    .route("/productos/:id")
    .delete(borrarProducto)
    .put([validarJWT, validarProducto], editarProducto)
    .get(obtenerUnProductos);

export default router;
