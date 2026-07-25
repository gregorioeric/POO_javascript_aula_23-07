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

/**
 * Integração da classe ContaBancaria com o HTML.
 * A classe acima continua sendo a única responsável
 * por controlar o saldo (encapsulamento); aqui só
 * lemos e exibimos o que ela expõe publicamente.
 */

let conta = null;

const formCriarConta = document.getElementById("form-criar-conta");
const criarContaCard = document.getElementById("criar-conta-card");
const contaCard = document.getElementById("conta-card");

const contaTitularEl = document.getElementById("conta-titular");
const contaSaldoEl = document.getElementById("conta-saldo");
const mensagemEl = document.getElementById("mensagem");
const extratoListaEl = document.getElementById("extrato-lista");

const formDeposito = document.getElementById("form-deposito");
const formSaque = document.getElementById("form-saque");
const valorDepositoInput = document.getElementById("valor-deposito");
const valorSaqueInput = document.getElementById("valor-saque");
const btnNovaConta = document.getElementById("btn-nova-conta");

function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function mostrarMensagem(texto, tipo) {
    mensagemEl.textContent = texto;
    mensagemEl.classList.remove("erro", "sucesso");
    mensagemEl.classList.add(tipo);
}

function limparMensagem() {
    mensagemEl.textContent = "";
    mensagemEl.classList.remove("erro", "sucesso");
}

function atualizarSaldo() {
    contaSaldoEl.textContent = formatarMoeda(conta.saldo);
}

function adicionarExtrato(tipo, valor) {
    const item = document.createElement("li");
    item.classList.add(tipo);
    const rotulo = tipo === "deposito" ? "Depósito" : "Saque";
    const sinal = tipo === "deposito" ? "+" : "-";
    item.innerHTML = `<span>${rotulo}</span><span>${sinal} ${formatarMoeda(valor)}</span>`;
    extratoListaEl.prepend(item);
}

formCriarConta.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const titular = document.getElementById("titular").value.trim();
    const saldoInicial = parseFloat(document.getElementById("saldo-inicial").value) || 0;

    conta = new ContaBancaria(titular, saldoInicial);

    contaTitularEl.textContent = conta.titular;
    atualizarSaldo();
    extratoListaEl.innerHTML = "";
    limparMensagem();

    criarContaCard.classList.add("hidden");
    contaCard.classList.remove("hidden");
    formCriarConta.reset();
});

formDeposito.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const valor = parseFloat(valorDepositoInput.value);

    try {
        conta.depositar(valor);
        atualizarSaldo();
        adicionarExtrato("deposito", valor);
        mostrarMensagem(`Depósito de ${formatarMoeda(valor)} realizado com sucesso.`, "sucesso");
        formDeposito.reset();
    } catch (erro) {
        mostrarMensagem(erro.message, "erro");
    }
});

formSaque.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const valor = parseFloat(valorSaqueInput.value);

    try {
        conta.sacar(valor);
        atualizarSaldo();
        adicionarExtrato("saque", valor);
        mostrarMensagem(`Saque de ${formatarMoeda(valor)} realizado com sucesso.`, "sucesso");
        formSaque.reset();
    } catch (erro) {
        mostrarMensagem(erro.message, "erro");
    }
});

btnNovaConta.addEventListener("click", () => {
    conta = null;
    contaCard.classList.add("hidden");
    criarContaCard.classList.remove("hidden");
    limparMensagem();
});
