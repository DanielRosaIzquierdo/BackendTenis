const adaptador = require('../database/adapter')

const getPartido = async (req, res) => {
    try {
        const partido = await adaptador.getPartidoPendiente()
        res.status(200).send({ status: 'OK', data: partido })
    } catch (error) {
        res.status(error.status || 500).send({ status: 'FAILED', message: error.message })
    }

}
const getPartidos = async (req, res) => {
    try {
        const partidos = await adaptador.getPartidosPendientes()
        res.status(200).send({ status: 'OK', data: partidos })
    } catch (error) {
        res.status(error.status || 500).send({ status: 'FAILED', message: error.message })
    }

}
const getPartidosFinalizados = async (req, res) => {
    try {
        const partidos = await adaptador.getPartidosFinalizados()
        res.status(200).send({ status: 'OK', data: partidos })
    } catch (error) {
        res.status(error.status || 500).send({ status: 'FAILED', message: error.message })
    }

}

const putPartido = async (req, res) => {
    const partido = req.body;

    if (!partido) res.status(400).send({ status: 'FAILED', message: 'NO DATA' });

    try {
        const partidoFinalizado = await adaptador.putPartidoFinalizado(partido)
        res.status(200).send({ status: 'OK', data: partidoFinalizado })
    } catch (error) {
        res.status(error.status || 500).send({ status: 'FAILED', message: error.message })
    }
}



module.exports = {
    getPartido,
    getPartidos,
    getPartidosFinalizados,
    putPartido,
}