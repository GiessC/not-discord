import dotenv from 'dotenv';
import express, { Express } from 'express';
import { TenorSearch } from './tenor/routes';

dotenv.config();

const app: Express = express();
const port: number = 5000;

app.get('/tenor/search', TenorSearch);

app.listen(port, () => {
    console.debug(`Server listening at http://localhost:${port}`);
});
