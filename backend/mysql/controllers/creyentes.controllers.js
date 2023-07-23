import getConnection from "../database/config.js";

const getCreyentes = async (req, res) => {
    try {
        const dbCnx = await getConnection();
        const response = await dbCnx.query("SELECT * FROM creyentes");
        res.json(response)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const getOneCreyente = async (req, res) => {
    try {
        const dbCnx = await getConnection();
        const {id} = req.params;
        const response = await dbCnx.query("SELECT * FROM creyentes WHERE id_creyente = ?", id);
        res.json(response)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const postCreyentes = async (req, res) => {
    try {
        const dbCnx = await getConnection();
        const {nombre_creyente, email_creyente, celular_creyente, direccion_creyente, fk_id_barrio} = req.body;
        const nuevoRegistro = {nombre_creyente, email_creyente, celular_creyente, direccion_creyente, fk_id_barrio};
        const result = await dbCnx.query("INSERT INTO creyentes SET ?", nuevoRegistro);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const deleteCreyentes = async (req, res) => {
    try {
        const {id} = req.params;
        const dbCnx = await getConnection();
        const result = await dbCnx.query("DELETE FROM creyentes WHERE id_creyente = ?", id);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const updateCreyentes = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre_creyente, email_creyente, celular_creyente, direccion_creyente, fk_id_barrio} = req.body;
        const actualizado = {nombre_creyente, email_creyente, celular_creyente, direccion_creyente, fk_id_barrio};

        const dbCnx = await getConnection();
        const result = dbCnx.query("UPDATE creyentes SET ? WHERE id_creyente = ?", [actualizado, id]);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export const methodsHTTP = {
    getCreyentes,
    getOneCreyente,
    postCreyentes,
    updateCreyentes,
    deleteCreyentes
}