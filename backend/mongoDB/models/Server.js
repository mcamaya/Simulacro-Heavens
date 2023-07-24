import express from "express";
import cors from "cors";
import dbCnxMongo from "../database/config.js";

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
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(departamentos, municipios, comunas, barrios, creyentesMysql, creyentesMongo){
        this.app.use(...departamentos);
        this.app.use(...municipios);
        this.app.use(...comunas);
        this.app.use(...barrios);
        this.app.use(...creyentesMysql);
        this.app.use(...creyentesMongo);
        
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }
}

export default Server;