import getConnection from "../database/config.js";

const getMunicipios = async (req, res) => {
    try {
        const dbCnx = await getConnection();
        const response = await dbCnx.query("SELECT * FROM municipios");
        res.json(response)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const getOneMunicipio = async (req, res) => {
    try {
        const dbCnx = await getConnection();
        const {id} = req.params;
        const response = await dbCnx.query("SELECT * FROM municipios WHERE id_municipio = ?", id);
        res.json(response)
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const postMunicipios = async (req, res) => {
    try {
        const dbCnx = await getConnection();
        const {nombre_municipio, fk_id_departamento} = req.body;
        const nuevoRegistro = {nombre_municipio, fk_id_departamento};
        const result = await dbCnx.query("INSERT INTO municipios SET ?", nuevoRegistro);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const deleteMunicipios = async (req, res) => {
    try {
        const {id} = req.params;
        const dbCnx = await getConnection();
        const result = await dbCnx.query("DELETE FROM municipios WHERE id_municipio = ?", id);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

const updateMunicipios = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre_municipio, fk_id_departamento} = req.body;
        const actualizado = {nombre_municipio, fk_id_departamento};

        const dbCnx = await getConnection();
        const result = dbCnx.query("UPDATE municipios SET ? WHERE id_municipio = ?", [actualizado, id]);
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export const methodsHTTP = {
    getMunicipios,
    getOneMunicipio,
    postMunicipios,
    updateMunicipios,
    deleteMunicipios
}