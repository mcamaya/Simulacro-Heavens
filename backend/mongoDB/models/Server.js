import express from "express";
import cors from "cors";
import { dbCnxMongo } from "../database/config.js";

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.connectMongoDB();
    }

    async connectMongoDB(){
        await dbCnxMongo();
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes(departamentos, municipios, creyentes){
        this.app.use(...departamentos);
        this.app.use(...municipios);
        this.app.use(...creyentes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }
}

export {Server};