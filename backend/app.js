import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import Server from './mongoDB/models/Server.js';

/* rutas mysql */
import departamentosRouter from './mysql/routes/departamentos.routes.js';
import municipiosRouter from './mysql/routes/municipios.routes.js';
import comunasRouter from './mysql/routes/comunas.routes.js';
import barriosRouter from './mysql/routes/barrios.routes.js';
import creyenteMysqlRouter from './mysql/routes/creyentes.routes.js';

/* rutas mongo */
import creyentesMongoRouter from './mongoDB/routes/creyente.routes.js';


const app = express();
app.use(express.json());
app.use(cors());


dotenv.config();
const server = new Server();

server.listen();
server.routes(
    ['/api/departamentos', departamentosRouter],
    ['/api/municipios', municipiosRouter],
    ['/api/comunas', comunasRouter],
    ['/api/barrios', barriosRouter],
    ['/api/creyentes/personalData', creyenteMysqlRouter],
    ['/', creyentesMongoRouter]
);