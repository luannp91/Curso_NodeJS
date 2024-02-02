//  Modulo Externo
const minimist = require("minimist");

//  Modulo Interno
const soma = require('./soma').soma

//  Integração do Modulo Externo com o Interno
const args = minimist(process.argv.slice(2))
const a = parseInt(args['a'])
const b = parseInt(args['b'])
soma(a, b)