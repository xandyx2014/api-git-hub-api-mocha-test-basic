const obtenerUsuario = require('./../index').obtenerDatosDeUsuario;

const expect = require('chai').expect;

var nock = require('nock');

const error403 = require('./respuestas/403');

describe('Test de datos de diferentes usuarios de Github', () => {
    beforeEach(() => {
        nock('https://api.github.com')
            .log(console.log)
            .get('/users/mugan86').
            reply(403, error403);
    });
    it('Error 403 demasiadas request en un intervalo corto', () => {
        return obtenerUsuario('mugan86').then(
            respuesta => {
                // Probar el tipo de variable que obtenemos de repsuesta. Tiene que ser un objeto.
                expect(typeof respuesta).to.equal('object');

                // Comprobar que el usuario de la API es mugan86
                expect(respuesta.message).to.equal('API rate limit exceeded for 83.213.183.48. (But here\'s the good news: Authenticated requests get a higher rate limit. Checkout the documentation for more details.)');
                // Documentation URL
                expect(respuesta.documentation_url).to.equal('https://developer.github.com/v3/#rate-limiting');
                // Message is string
                expect(typeof respuesta.message).to.equal('string');
                // URL documentation string
                expect(typeof respuesta.documentation_url).to.equal('string');
                
            }
        )
    });
    afterEach(() => {
        nock = null;
    });
});