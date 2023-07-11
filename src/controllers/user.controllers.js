import User from "../models/user";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
    try {
        //verificar si existe un mail como el recibido
        const { email, password } = req.body;

        //verificar si el email ya existe
        let usuario = await User.findOne({ email }); //devulve un null
        if (!usuario) {
            //si el usuario existe
            return res.status(400).json({
                mensaje: "Correo o password invalido - correo",
            });
        }
        // si no es valido el password
        if (password !== usuario.password) {
            return res.status(400).json({
                mensaje: "Correo o password invalido - password",
            });
        }

        //responder que el usuario es correcto
        res.status(200).json({
            mensaje: "El usuario existe",
            uid: usuario._id,
            nombre: usuario.nombreUsuario,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "usuario o contraseña invalido",
        });
    }
};

export const crearUsuario = async (req, res) => {
    try {
        const { email } = req.body;

        //verificar si el email ya existe
        let usuario = await User.findOne({ email }); //devulve un null
        if (usuario) {
            //si el usuario existe
            return res.status(400).json({
                mensaje: "ya existe un usuario con el correo enviado",
            });
        }
        //guardamos el nuevo usuario en la BD
        usuario = new User(req.body);
        // // editar el usuario para encriptar la contraseña
        const salt = bcrypt.genSaltSync(10); //cantidad de veces q se ejecuta el algoritmo
        usuario.password = bcrypt.hashSync(password, salt); //despues guardara el pasword

        await usuario.save();
        res.status(201).json({
            mensaje: "usuario creado",
            nombre: usuario.nombre,
            uid: usuario._id,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "El usuario no pudo ser creado",
        });
    }
};

export const listarUsuarios = async (req, res) => {
    // res.send("esto es una prueba de una peticion get");
    try {
        //buscar en la BD la collection de productos
        const usuarios = await User.find();
        //envio la respuesta al frontend
        res.status(200).json(usuarios);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al buscar los usuarios",
        });
    }
};
