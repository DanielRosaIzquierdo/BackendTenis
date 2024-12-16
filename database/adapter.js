const axios = require('axios');

const urlBase = 'https://backend-tenis-default-rtdb.europe-west1.firebasedatabase.app/';

const getPartidoPendiente = async () => {
    const url = `${urlBase}partidos.json`;
    const partidos = await axios.get(url);
    const data = partidos.data;

    let entries = Object.entries(data);


    let primerPartidoPendiente = entries.filter((partido) => !partido[1].finalizado)[0];


    let partidoADevolver = primerPartidoPendiente[1];
    partidoADevolver['id'] = primerPartidoPendiente[0];

    return partidoADevolver;
}

const getPartidosPendientes = async () => {
    const url = `${urlBase}partidos.json`;
    const partidos = await axios.get(url);
    const data = partidos.data;


    let entries = Object.entries(data);


    let partidosPendientes = entries.filter((partido) => !partido[1].finalizado);

    let partidosADevolver = [];

    for (const key in partidosPendientes) {
        let partido = partidosPendientes[key][1];
        partido['id'] = partidosPendientes[key][0]
        partidosADevolver.push(partido);
    }


    return partidosADevolver;
}

const getPartidosFinalizados = async () => {
    const url = `${urlBase}partidos.json`;
    const partidos = await axios.get(url);
    const data = partidos.data;

    let entries = Object.entries(data);


    let partidosFinalizados = entries.filter((partido) => partido[1].finalizado);

    let partidosADevolver = [];

    for (const key in partidosFinalizados) {
        let partido = partidosFinalizados[key][1];
        partido['id'] = partidosFinalizados[key][0]
        partidosADevolver.push(partido);
    }


    return partidosADevolver;

}

const putPartidoFinalizado = async (partido) => {
    const url = `${urlBase}partidos/${partido.id}.json`;
    let partidoPut = {
        'Jugador1': partido.Jugador1,
        'Jugador2': partido.Jugador2,
        'finalizado': partido.finalizado,
        'resultado': partido.resultado,
    }

    await axios.put(url, partidoPut);

}


module.exports = {
    getPartidoPendiente,
    getPartidosPendientes,
    getPartidosFinalizados,
    putPartidoFinalizado,
}