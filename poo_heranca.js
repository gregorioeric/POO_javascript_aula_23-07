/**
 * O que é herança em JS
 *
 * Herança em JavaScript é um mecanismo que
 * permite que uma classe
 * (chamada classe filha ou subclasse)
 * herde propriedades e métodos
 * de outra classe (chamada classe pai ou
 * superclasse).
 *
 * Em outras palavras, é uma forma de
 * reutilizar código entre classes,
 * sem precisar reescrevê-lo.
 *
 *  */

class Person {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log(
      `Olá, meu nome é ${this.nome} 
            e eu tenho ${this.idade} anos.`,
    );
  }
}

class Aluno extends Person {
  constructor(nome, idade, matricula) {
    super(nome, idade);
    this.matricula = matricula;
  }

  estudar() {
    console.log(
      `${this.nome} está estudando
            com a matrícula ${this.matricula}.`,
    );
  }
}

const aluno = new Aluno("Eric", 25, 123456);
aluno.saudacao();
aluno.estudar();
