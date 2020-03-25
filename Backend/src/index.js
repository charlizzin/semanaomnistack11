const express = require('express');
const routes = require('./routes')
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // Transforme para o express conseguir ler o formato json
app.use(routes);

app.listen(3333);

/**
 * npm install nodemon -D - instala somente para desenvolvimento, apos isso adionar script de start no package.json
 *
 */

/*
*Tipos de parametros:
*
*Query params: Parametros nomeados enviados na rota apos o simbolo de ""??"(Filtros, paginacao)
*Route params: Parametro utilizado para idenficar recursos
*Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
*/

/**
 * Query Build: atble('users').select('*').where('')
 */
