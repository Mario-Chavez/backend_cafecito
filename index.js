import express from "express";
import cors from "cors";
import morgan from "morgan";
import * as dotenv from "dotenv";

dotenv.config(); //puedo leer variable de entorno

// crear una instancia de express
const app = express();

// crear puerto
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
    console.log("corriendo en port:", app.get("port"));
});

// middlewares: funciones q ejecutan una tarea antes de llegar a las rutas
app.use(cors()); // permite conecciones remotas
app.use(express.json()); //permite interpretar el formato json
app.use(express.urlencoded({ extended: true })); //permite en el objeto requiest string o array
app.use(morgan("dev")); // nos da informacion extra en la terminal

// Rutas
app.get("/prueba", (req, res) => {
    res.send("prueba de solicitud de peticiopn get del backend");
});
