# API Github
Obtener los datos de un usuario introducido por parámetro de la API de Github.

## Intrucciones de uso
Seguir las siguientes instrucciones.

### Instalación

```
npm install proyecto-1b-api-github
```

### Uso

```
const api = require('proyecto-1b-api-github');

api.obtenerDatosDeUsuario('mugan86').then(
    data => {
        console.log(data);
        if (data.message === undefined) { // OK message
            console.log('OK');
            console.log(data.login);
        } else {
            console.log(data.message); // ERROR message
        }
    }
);
```