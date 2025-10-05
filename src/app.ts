import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { appRoutes } from './app/routes';

const app: Application = express();

// Parsers
app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(cookieParser());
app.use(express.json());

app.use('/api', appRoutes.router);

app.get('/', (req: Request, res: Response) => {
  res.send(`The server is running!`);
});

export default app;
