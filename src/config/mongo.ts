import "dotenv/config";
import { connect } from "mongoose";

//Realizamos la coneccion a la base de datos

async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI
    await connect(DB_URI)
}

export default dbConnect;