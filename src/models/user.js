import { Schema, model } from "mongoose";

const userSchema = new Schema({
    nombreUsuario: {
        type: String,
        maxLength: 300,
        require: true,
    },
    email: {
        type: String,
        maxLength: 200,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
});

const User = model("user", userSchema);
export default User;
