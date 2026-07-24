/**
 * O que são constructores em JS
 *
 * Constructores são funções que são
 * usadas para criar e inicializar objetos
 *
 * De forma mais simples: é uma receita
 * para criar objetos
 *
 */

class Person {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const person1 = new Person("Eric", 22);
const person2 = new Person("Maria", 28);

console.log(person1);
console.log(person2);

const objeto = {
  person: (nome, idade) => {
    return {
      nome: nome,
      idade: idade,
    };
  },
};

const person3 = objeto.person("Eric", 22);
const person4 = objeto.person("Maria", 28);

console.log(person3);
console.log(person4);

/**
 * Vantagens de usar constructores
 *
 * - Código mais limpo
 * - Código mais organizado
 * - Código mais fácil de manter
 * - Código mais reutilizável
 * - Código mais escalável
 *
 *  Desvantagens de usar constructores
 *
 * - Código mais verboso
 * - Código mais complexo
 * - Código mais difícil de ler
 * - Código mais difícil de depurar
 * - Código mais difícil de testar
 *
 *  */
