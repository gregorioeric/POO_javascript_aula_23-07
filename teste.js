import Pessoa from "./poo_static.js";

const pessoa1 = new Pessoa("Eric", 25);
console.log(pessoa1);
const teste = pessoa1.criarPessoa("João", 20);
console.log(teste);
Pessoa.saudacao();
console.log(Pessoa.numeroDePessoas);
