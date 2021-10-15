const hospitalController = require('../controller/hospitalController');

module.exports = (router) => {

    // ruta para obtener historia por cedula
    router.get('/consultas/:id', hospitalController.consultaHistoria);
    // ruta para consultar todas las historias
    router.get('/v1/consultas', hospitalController.consultarHistorias);
    // ruta para consultar historias clinicas con informacion reducida
    router.get('/v2/consultas', hospitalController.consultaHistoria2);

    


    router.get('/consultas2', (req, res) => {
        let version = req.headers['accept-version'];
        if(version === "v1") {
            return hospitalController.consultaHistoria;
        } else if (version === "v2") {
            return hospitalController.consultarHistorias;
        }
        
    })

    router.post('/guardarHistoria', hospitalController.crearHistoria);
}

