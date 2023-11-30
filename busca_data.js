/* Crie uma regex, na linguagem js, que busque a data de aniversário de usuários que estejam no seguinte formato: '22/07/1995', '22 07 1995', '28.03.1984', */

const fs = require('fs');

const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, 'utf-8');

const patternData = /\d{2}[\s\/.]\d{2}[\s\/.]\d{4}/g //+++++++++++++++++++++ensira aqui a sua resposta+++++++++++++++++++++++++

const matchData = banco.match(patternData);
console.log(matchData);
