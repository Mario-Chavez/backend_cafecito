import { validationResult } from "express-validator";

const resultadoValidacion = (req, res, next) => {
    // trabajar con el resultado de la validacion
    const errors = validationResult(req);
    // erros.isEmpty() true si esta vacio es q no hay error
    // si no esta esta vacio hay error
    if (!errors.isEmpty()) {
        return res.status(400).json({ errores: errors.array() });
    }
    next();
};

export default resultadoValidacion;
