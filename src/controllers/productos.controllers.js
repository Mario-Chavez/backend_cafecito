import { validationResult } from "express-validator";
import Producto from "../models/products";

// controlador para obtener los productos
export const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "error al buscar producto",
        });
    }
};

// controlador para crear productos

export const crearProducto = async (req, res) => {
    try {
        // trabajar con el resultado de la validacion
        const errors = validationResult(req);
        // erros.isEmpty() true si esta vacio es q no hay error
        // si no esta esta vacio hay error
        if (!errors.isEmpty()) {
            return res.status(400).json({ errores: errors.array() });
        }
        const productoNuevo = new Producto(req.body);
        await productoNuevo.save(); //se guarda en base de dato con save() de mogose
        res.status(201).json({
            mensaje: "el producto fue creado correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "error al guardar producto en db",
        });
    }
};

// delete product

export const borrarProducto = async (req, res) => {
    try {
        // ruta ("/productos/:id")
        // tengo q buscar el id que me mandan por param y luego solicitar a mongoose el borrar por id
        const { id } = req.params;
        await Producto.findByIdAndDelete(id);
        res.status(200).json({ mensaje: "producto eliminiado" });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "error al borrar producto no se encontro en db",
        });
    }
};

// delete editar

export const editarProducto = async (req, res) => {
    try {
        // extraer el id del request y en el body
        // parasamos el id seguido de una , despues el objeto q recibimos en el body
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ mensaje: "producto editado correctamente" });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "error al editar producto no se encontro en db",
        });
    }
};

// controlador para obtener un producto
export const obtenerUnProductos = async (req, res) => {
    try {
        const productoEncontrado = await Producto.findById(req.params.id);
        res.status(200).json(productoEncontrado);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "error no se pudo encontrar el producto",
        });
    }
};
