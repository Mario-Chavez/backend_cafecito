import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarProducto = [
    check("nombreProducto")
        .notEmpty() //obligatorio
        .withMessage("el nombre del producto es un dato obligatorio")
        .isLength({ min: 2, max: 100 })
        .withMessage("El nombre del producto debe contener entre 2 y 100 caracteres"),
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
    check("imagen")
        .notEmpty()
        .withMessage("La imagen es un dato obligatorio")
        .matches(/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|svg|webp)$/)
        .withMessage("La url debe ser correcta con la extension que corresponda"),
    check("categoria")
        .notEmpty()
        .withMessage("La categoria es un dato obligatorio")
        .isIn(["bebida caliente", "dulce", "salado"]) // validar loas categorias que vienen del front
        .withMessage("La categoria debe ser correcta"),
    // al final de la validacion invoco a resultadoValidacion
    (req, res, next) => {
        resultadoValidacion(req, res, next);
    },
];

export default validarProducto;
