const meuNumero = 3;

const num1 = 1;
const num2 = 2;

const operacaoMatematica = num1 + num2;

console.log(operacaoMatematica);

// ponto flutuante

const numPontoFlutuante = 3.3;
const numPontoFlutuanteSemZero = .5;

const operacaoMatematica2 = numPontoFlutuante / numPontoFlutuanteSemZero;

console.log(operacaoMatematica2);


// NaN -> Not a number 

const teste = "Teste";

console.log(num1 * teste);


// null
let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

//undefined
let input1 = null;
let input2;

console.log(input1); // null
console.log(input2); // undefined

//resultados de operações em variáveis
const soma = 10 + 10;
const multiplicacao = 10 * 10;
const operacao = (soma + multiplicacao) + 10;
