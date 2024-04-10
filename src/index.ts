import "dotenv/config"
import express from 'express'
import cors from 'cors'
import db from "./config/mongo"
import { productsRouter } from './routes'



const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
db().then(() => console.log('db connection ready'));


app.use('/v1', productsRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})