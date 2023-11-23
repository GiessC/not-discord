import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port: number = 5000;

app.get('/', (_req: Request, res: Response) => {
    res.send({
        name: 21,
    });
});

app.listen(port, () => {
    console.debug(`Server listening at http://localhost:${port}`);
});
