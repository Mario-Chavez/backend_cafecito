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