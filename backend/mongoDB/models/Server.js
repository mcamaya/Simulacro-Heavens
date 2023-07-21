import express from "express";
import cors from "cors";
import dbCnxMongo from "../database/config.js";
import creyentesRouter from "./../routes/creyente.routes.js";

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.connectMongoDB();
        this.routes();
    }

    async connectMongoDB(){
        await dbCnxMongo();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        // this.app.use(...departamentos);
        // this.app.use(...municipios);
        this.app.use(creyentesRouter);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }
}

export default Server;