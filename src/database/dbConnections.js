import { connect } from "mongoose";
import { MONGODB_URI } from "../../config";

connect(MONGODB_URI)
    .then((resp) => console.log(`db conectada a ${resp.connection.name}`))
    .catch((err) => console.log(err));
