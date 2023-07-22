import getConnection from "../database/config.js";

const getBarrios = async (req, res) => {
    try {
        const dbCnx = await getConnection();
        const response = await dbCnx.query("SELECT * FROM barrios");
        res.json(response)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const getOneBarrio = async (req, res) => {
    try {
        const dbCnx = await getConnection();
        const {id} = req.params;
        const response = await dbCnx.query("SELECT * FROM barrios WHERE id_barrio = ?", id);
        res.json(response)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const postBarrios = async (req, res) => {
    try {
        const dbCnx = await getConnection();
        const {nombre_barrio, fk_id_comuna} = req.body;
        const nuevoRegistro = {nombre_barrio, fk_id_comuna};
        const result = await dbCnx.query("INSERT INTO barrios SET ?", nuevoRegistro);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const deleteBarrios = async (req, res) => {
    try {
        const {id} = req.params;
        const dbCnx = await getConnection();
        const result = await dbCnx.query("DELETE FROM barrios WHERE id_barrio = ?", id);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const updateBarrios = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre_barrio, fk_id_comuna} = req.body;
        const actualizado = {nombre_barrio, fk_id_comuna};

        const dbCnx = await getConnection();
        const result = dbCnx.query("UPDATE barrios SET ? WHERE id_barrio = ?", [actualizado, id]);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export const methodsHTTP = {
    getBarrios,
    getOneBarrio,
    postBarrios,
    updateBarrios,
    deleteBarrios
}