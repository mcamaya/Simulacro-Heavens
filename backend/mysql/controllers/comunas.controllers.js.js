import getConnection from "../database/config.js";

const getComunas = async (req, res) => {
    try {
        const dbCnx = await getConnection();
        const response = await dbCnx.query("SELECT * FROM comunas");
        res.json(response)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const getOneComuna = async (req, res) => {
    try {
        const dbCnx = await getConnection();
        const {id} = req.params;
        const response = await dbCnx.query("SELECT * FROM comunas WHERE id_comuna = ?", id);
        res.json(response)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const postComunas = async (req, res) => {
    try {
        const dbCnx = await getConnection();
        const {nombre_comuna, fk_id_municipio} = req.body;
        const nuevoRegistro = {nombre_comuna, fk_id_municipio};
        const result = await dbCnx.query("INSERT INTO comunas SET ?", nuevoRegistro);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const deleteComunas = async (req, res) => {
    try {
        const {id} = req.params;
        const dbCnx = await getConnection();
        const result = await dbCnx.query("DELETE FROM comunas WHERE id_comuna = ?", id);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const updateComunas = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre_comuna, fk_id_municipio} = req.body;
        const actualizado = {nombre_comuna, fk_id_municipio};

        const dbCnx = await getConnection();
        const result = dbCnx.query("UPDATE comunas SET ? WHERE id_comuna = ?", [actualizado, id]);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export const methodsHTTP = {
    getComunas,
    getOneComuna,
    postComunas,
    updateComunas,
    deleteComunas
}