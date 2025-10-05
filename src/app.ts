import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app: Application = express();

// Parsers
app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(cookieParser());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send(`The server is running!`);
});

export default app;
