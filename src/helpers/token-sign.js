import jwt from "jsonwebtoken";

// genera el token a partir de los datos q le pasamos
const generarJWT = (uid, nombre) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, nombre };
        jwt.sign(
            payload,
            process.env.SECRET_JWT,
            {
                expiresIn: "3h",
            },
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject("No se pudo generar token");
                }
                // si esta todo correcto
                resolve(token);
            }
        );
    });
};
export default generarJWT;
