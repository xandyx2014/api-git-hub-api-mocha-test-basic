const obtenerUsuario = require('./../index').obtenerDatosDeUsuario;

const expect = require('chai').expect;

var nock = require('nock');

const mugan86 = require('./respuestas/mugan86');

describe('Test de datos de diferentes usuarios de Github', () => {
    beforeEach(() => {
        nock('https://api.github.com')
            .log(console.log)
            .get('/users/mugan86').
            reply(200, mugan86);
    });
    it('Obtener datos del usuario "mugan86"', () => {
        return obtenerUsuario('mugan86').then(
            respuesta => {
                // Probar el tipo de variable que obtenemos de repsuesta. Tiene que ser un objeto.
                expect(typeof respuesta).to.equal('object');

                // Comprobar que el usuario de la API es mugan86
                expect(respuesta.login).to.equal('mugan86');
                // COmprobar que el ID del usuario es númerico
                expect(typeof respuesta.id).to.equal('number');
                // Seguidoes y seguidos sean númericos
                expect(typeof respuesta.followers).to.equal('number');
                expect(typeof respuesta.following).to.equal('number');
                // Location = Soraluze (Basque Country) (EU)
                expect(respuesta.location).to.equal('Soraluze (Basque Country) (EU)');
            }
        )
    });
});