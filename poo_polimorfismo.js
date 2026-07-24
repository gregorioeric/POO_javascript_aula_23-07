/**
 * Aula sobre polimorfismo em JavaScript
 *
 * Polimorfismo significa "muitas
 * formas": classes diferentes
 * podem implementar o mesmo método
 * cada uma à sua maneira.
 * Quem está usando o objeto não precisa
 * saber qual classe
 * exata está por trás dele, apenas que
 * ele possui aquele método.
 */
class Forma {
  calcularArea() {
    throw new Error("Implemente o método calcularArea().");
  }

  descrever() {
    // o mesmo método é chamado aqui, mas o
    // resultado muda de acordo
    // com a classe que implementa calcularArea()
    // — isso é polimorfismo
    return `${this.constructor.name} tem área de ${this.calcularArea()}`;
  }
}

class Circulo extends Forma {
  constructor(raio) {
    super();
    this.raio = raio;
  }

  calcularArea() {
    return Number((Math.PI * this.raio ** 2).toFixed(2));
  }
}

class Quadrado extends Forma {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  calcularArea() {
    return this.lado ** 2;
  }
}

class Retangulo extends Forma {
  constructor(largura, altura) {
    super();
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }
}

const formas = [new Circulo(5), new Quadrado(4), new Retangulo(3, 6)];

// polimorfismo em ação: o mesmo laço chama
// forma.calcularArea()
// sem saber (nem precisar saber) qual classe
// específica está sendo tratada
formas.forEach((forma) => {
  console.log(forma.descrever());
});
