import express from 'express';
import { config} from 'dotenv'; 
import cors from 'cors';
import productsRouter from './routes/products.js';

config();

const PORT = process.env.PORT || 3500; 

const app = express();
app.use(cors({
    origin: '*',
    credentials:true
  }));
app.use(express.json());
app.use(express.static('public'));
app.use('/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
