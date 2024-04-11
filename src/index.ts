import "dotenv/config"
import express from 'express'
import cors from 'cors'
import db from "./config/mongo"
import { productsRouter } from './routes/'



const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors()); //Ayuda resolver el error de CORS 
app.use(express.json()); //Premite recibir datos tipo json en el body
db().then(() => console.log('db connection ready'));

// ------- routing
app.use('/v1/products', productsRouter);

// ------- port listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})