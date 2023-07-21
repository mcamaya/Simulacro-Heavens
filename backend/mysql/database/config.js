import mysql from "promise-mysql";
import { config } from "dotenv";

config();

const dbConnection = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DB_MYSQL,
    user: process.env.USER_MYSQL,
    password: process.env.PWD_MYSQL
});

const getConnection = () => {
    return dbConnection;
}

export default getConnection;