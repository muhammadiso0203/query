import express from "express";
import { config } from "dotenv";
import categoryRouter from './routes/category.routes.js'
import productRouter from './routes/product.routes.js'
config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use('/category', categoryRouter)
app.use('/product', productRouter)

app.listen(PORT, () => console.log('Server is running on port', PORT));