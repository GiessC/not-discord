import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import { TenorSearch } from './tenor/routes';
import { FavoriteGifs } from './user/routes';

dotenv.config();

const app: Express = express();
const port: number = 5000;

app.use(cors());

app.get('/tenor/search', TenorSearch);

app.get('/user/gifs/favorites', FavoriteGifs);
app.post('/user/gifs/favorite/:gifId', FavoriteGifs);

app.listen(port, () => {
    console.debug(`Server listening at http://localhost:${port}`);
});
