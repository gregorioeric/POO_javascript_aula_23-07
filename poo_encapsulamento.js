/**
 * Aula sobre encapsulamento em JavaScript
 *
 * Encapsulamento é o mecanismo que
 * esconde os detalhes internos
 * de um objeto, expondo apenas o
 * que é necessário através de
 * métodos e propriedades públicas.
 *
 * Em JavaScript, usamos "#" antes do
 * nome de uma propriedade ou
 * método para torná-lo privado —
 * ele só pode ser acessado de
 * dentro da própria classe, nunca de fora.
 */

class ContaBancaria {
  // propriedade privada: não pode
  // ser lida nem alterada fora da classe
  #saldo;

  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  // getter: expõe uma forma segura
  // e controlada de "ler" o saldo
  get saldo() {
    return this.#saldo;
  }

  depositar(valor) {
    if (valor <= 0) {
      throw new Error("O valor do depósito deve ser maior que zero.");
    }
    this.#saldo += valor;
    return this.#saldo;
  }

  sacar(valor) {
    if (valor <= 0) {
      throw new Error("O valor do saque deve ser maior que zero.");
    }
    if (valor > this.#saldo) {
      throw new Error("Saldo insuficiente.");
    }
    this.#saldo -= valor;
    return this.#saldo;
  }
}

const conta = new ContaBancaria("Eric", 1000);

console.log(conta.saldo);
conta.depositar(100);
console.log(conta.saldo);
conta.sacar(50);
console.log(conta.saldo);
