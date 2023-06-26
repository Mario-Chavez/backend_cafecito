import { connect } from "mongoose";
import { MONGODB_URI } from "../routes/config";

// Opcion 1
// (async () => {
//     try {
//         const db = await connect(MONGODB_URI);
//         console.log(`db conectada${db.connection.name}`);
//     } catch (error) {
//         console.log(error);
//     }
// })();
// Opcion 2

connect(MONGODB_URI)
    .then((resp) => console.log(`db conectada${resp.connection.name}`))
    .catch((err) => console.log(err));
