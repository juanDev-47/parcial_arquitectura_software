const HistoriaClinica = require('../models/Historia');

// metodo para consultar una historia medica
exports.consultaHistoria = async (req, res) => {
    const param = req.params.id;
    console.log(param);

    const respond = await HistoriaClinica.find({'cedulaPaciente': param});
    res.json(respond);
}

exports.consultaHistoria2 = async (req, res) => {

    const respond = await HistoriaClinica.find({},{nombrePaciente: 1, sintomas: 1, fechaRegistro:1});
    res.json(respond);
}

// metodo para mostrar todas las historias
exports.consultarHistorias = async (req, res) => {
    const historias = await HistoriaClinica.find({});
    res.json(historias);
}

//metodo para guardar la historia clinica
exports.crearHistoria = async (req, res) => {
    const history = req.body;
    const historia = new HistoriaClinica(history);  

        try {
            await historia.save();
            res.json(historia);
        } catch (error) {
            res.send(error);
            next();
        }

}