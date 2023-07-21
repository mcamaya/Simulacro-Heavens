import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import Server from './mongoDB/models/Server.js';

/* rutas mysql */
import departamentosRouter from './mysql/routes/departamentos.routes.js';
import municipiosRouter from './mysql/routes/municipios.routes.js';

/* rutas mongo */
import creyentesRouter from './mongoDB/routes/creyente.routes.js';

const app = express();
app.use(express.json());
app.use(cors());


dotenv.config();
const server = new Server();

server.listen();
// server.routes(
//     ['/api/departamentos', departamentosRouter],
//     ['/api/municipios', municipiosRouter],
//     ['/', creyentesRouter]
// );