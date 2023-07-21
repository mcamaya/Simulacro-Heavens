import getConnection from "../database/config.js";

const getDepartamentos = async (req, res) => {
    try {
        const dbCnx = await getConnection();
        const response = await dbCnx.query("SELECT * FROM departamentos");
        res.json(response)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const getOneDepartamento = async (req, res) => {
    try {
        const dbCnx = await getConnection();
        const {id} = req.params;
        const response = await dbCnx.query("SELECT * FROM departamentos WHERE id_departamento = ?", id);
        res.json(response)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const postDepartamentos = async (req, res) => {
    try {
        const dbCnx = await getConnection();
        const {nombre_departamento} = req.body;
        const nuevoRegistro = {nombre_departamento};
        const result = await dbCnx.query("INSERT INTO departamentos SET ?", nuevoRegistro);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const deleteDepartamentos = async (req, res) => {
    try {
        const {id} = req.params;
        const dbCnx = await getConnection();
        const result = await dbCnx.query("DELETE FROM departamentos WHERE id_departamento = ?", id);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const updateDepartamentos = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre_departamento} = req.body;
        const actualizado = {nombre_departamento};

        const dbCnx = await getConnection();
        const result = dbCnx.query("UPDATE departamentos SET ? WHERE id_departamento = ?", [actualizado, id]);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export const methodsHTTP = {
    getDepartamentos,
    getOneDepartamento,
    postDepartamentos,
    updateDepartamentos,
    deleteDepartamentos
}