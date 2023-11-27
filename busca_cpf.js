//Crie uma regex que identifique os cpf escritos nos seguintes padrões: '08978011209', '089.780.112-09' e '089-780-112.09'.
//cap. 2 aula2

const fs = require('fs');

const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, "utf-8");

const regexCpf = /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g; //resposta correta ja respondida
const matchCpf = banco.match(regexCpf);

console.log(matchCpf);