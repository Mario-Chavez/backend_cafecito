import { Router } from "express";
import {
    borrarProducto,
    crearProducto,
    editarProducto,
    obtenerProductos,
    obtenerUnProductos,
} from "../controllers/productos.controllers";
import { check } from "express-validator";

const router = Router();

// Rutas
router
    .route("/productos")
    .get(obtenerProductos)
    .post(
        [
            check("nombreProducto")
                .notEmpty()
                .withMessage("el nombre del producto es un dato obligatorio")
                .isLength({ min: 2, max: 100 })
                .withMessage(
                    "El nombre del producto debe contener entre 2 y 100 caracteres"
                ),
            check("precio")
                .notEmpty()
                .withMessage("el nombre del producto es un dato obligatorio")
                .isNumeric()
                .withMessage("el precio debe ser un numero")
                // metodo propio para realizar validacion este caso es para el precio
                .custom((value) => {
                    if (value >= 1 && value <= 15000) {
                        return true;
                    } else {
                        throw new Error("El precio debe estar entre 1 y 15000");
                    }
                }),
        ],
        crearProducto
    );

// delete, put and find one product
router
    .route("/productos/:id")
    .delete(borrarProducto)
    .put(editarProducto)
    .get(obtenerUnProductos);

export default router;
