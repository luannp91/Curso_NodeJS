//  Nome
console.log(process.argv);

const args = process.argv.slice(2)
console.log(args);

const nome = args[0].split('=')[1]
console.log(nome);

//  Idade
const idade = args[1].split('=')[1]
console.log(idade);

console.log(`O nome é ${nome} e tem ${idade} anos!!!`);