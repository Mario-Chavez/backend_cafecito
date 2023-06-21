import express from "express";

// configurar  un puerto
// crear una instancia de express
const app = express();

// crear puerto
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
    console.log("corriendo en port:", app.get("port"));
});
