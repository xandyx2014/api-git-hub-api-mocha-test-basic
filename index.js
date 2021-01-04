const axios = require('axios');

module.exports = {
    /**
     * Introducir el usuario de github para obtener sus datos de la API
     * @example
     * usuario = 'mugan86' 
     * @param { string } usuario Usuario del que queremos los datos de la API
     */
    obtenerDatosDeUsuario: function ( usuario ) {
        const url = `https://api.github.com/users/${ usuario }`;
        return axios.get(url).then(
            data => data.data
        ).
        catch( error => error.response.data);
    }
}