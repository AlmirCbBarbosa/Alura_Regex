//criar pattern para encontrar numeros de celulares. Atividade capitulo 2 aula 1

const fs = require('fs');

const bancoCsv = 'database.csv'; //nome do arquivo
const banco = fs.readFileSync(bancoCsv, "utf-8"); //abre o arquivo

const patternCel = /\(\d{2}\)\s\d{5}-\d{4}/g //regex de celulares

const matchCelular = banco.match(patternCel); // procura pelo padrão na base de dados
console.log(matchCelular); // exibe as ocorrências encontradas