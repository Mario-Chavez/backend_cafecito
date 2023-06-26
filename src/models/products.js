import { Schema, model } from "mongoose";

const productoSchema = new Schema({
    nombreProducto: {
        type: String,
        minLength: 2,
        maxLength: 100,
        unique: true,
        require: true,
    },
    precio: {
        type: Number,
        min: 1,
        max: 15000,
        require: true,
    },
    imagen: {
        type: String,
        require: true,
    },
    categoria: {
        type: String,
        require: true,
    },
});

const Producto = model("producto", productoSchema);
export default Producto;
