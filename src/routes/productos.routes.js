import { Router } from "express";
import { obtenerProductos } from "../controllers/productos.controllers";

const router = Router();
// // Rutas
// app.get("/prueba", (req, res) => {
//     res.send("prueba de solicitud de peticiopn get del backend");
// });

router.route("/productos").get(obtenerProductos);

export default router;
