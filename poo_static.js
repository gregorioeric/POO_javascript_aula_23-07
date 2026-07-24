/**
 * O que é static?
 *
 * A palavra-chave `static` em JavaScript
 * é usada para
 * definir propriedades e métodos que
 * pertencem à própria classe,
 *  em vez de pertencerem a instâncias
 * específicas dessa classe.
 *
 * Quando você declara uma propriedade ou
 * método como `static`,
 * você não precisa criar um objeto
 * (instância) da classe para acessá-lo.
 * Em vez disso, você pode chamá-lo
 * diretamente na classe.
 */

class Pessoa {
  static numeroDePessoas = 0;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    Pessoa.numeroDePessoas++;
  }

  static saudacao() {
    console.log("Olá, eu sou uma classe!");
  }

  criarPessoa(nome, idade) {
    Pessoa.saudacao();
    console.log(this.numeroDePessoas);
    return new Pessoa(nome, idade);
  }
}

export default Pessoa;

// const pessoa1 = new Pessoa("Eric", 25);
// const pessoa2 = new Pessoa("João", 30);
// const pessoa3 = new Pessoa("Maria", 28);

// console.log(Pessoa.numeroDePessoas);

class Aluno extends Pessoa {
  constructor(nome, idade, matricula) {
    super(nome, idade);
    this.matricula = matricula;
  }
}
const aluno1 = new Aluno("Pedro", 20, "123456");
console.log(aluno1);

const p1 = new Pessoa("Ana", 22);
Pessoa.criarPessoa("Carlos", 29);
const p3 = new Pessoa("Tania", 45);
p1.console.log(p1);

p1.saudacao();
console.log(Pessoa.numeroDePessoas);
