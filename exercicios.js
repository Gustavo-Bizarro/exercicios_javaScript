//Variaveis e tipos de dados

// 1 - Conversão de temperatura

const celsius = 30;
const fahenheit = 86;

function celsiusFarenheit(celsuis){
    return (celsuis * 9) / 5 + 32;
}

function farenheitCelsius(fahenheit){
    return (fahenheit - 32) *5 / 9;
}

console.log(`${celsius} graus Celsius equivalente em fahenheit ${celsiusFarenheit (celsius)} Gras fahenheit`);
console.log(`${fahenheit} graus Fahenheit equivalente em Celsiur ${farenheitCelsius (fahenheit)} Gras Celsiur`);

//2 - Calculo do IMC

const altura = 1.78;
const peso = 91;

function calcularImc(altura , peso){
    return (peso / (altura * altura)).toFixed(2)
}
const imc = calcularImc (altura, peso)
console.log(`O Seu IMC é ${imc}`);


//3 - Concatenação de string

const nome = "Ricardo";
const idade = 75;
const cidade = "Morungava";

function criarMensagem(nome, idade, cidade){
    return `Ola meu nome é ${nome} tenho ${idade} e moro em ${cidade}`
}

//console.log(`Meu nome é ${nome}, tenho ${idade} e moro na cidade de ${cidade}`)
const mensagem = criarMensagem(nome,idade,cidade);
console.log(mensagem)

// Operadores e expressões

// 4 - Calcule a area e o perimetro de um retângulo

const comprimento = 10;
const largura = 5;

function calculoArea(comprimento, largura){
    return comprimento * largura

}

const area = calculoArea(comprimento, largura)
console.log(`a area do retangulo é ${area}`)

function calcularPerimetro(comprimento,largura){
    return (comprimento + largura) * 2;
}

const perimetro = calcularPerimetro(comprimento,largura);
console.log(`O perimetro do retangulo é ${perimetro}`)

//5 - Verificação da divisibilidade:

const n1 = 5;
const n2 = 4;

function divisibilidade( n1 , n2 ){
    return n1 % n2 === 0;
}
const res = divisibilidade (n1 , n2)
console.log(`O número ${n1} dividio por ${n2} o resto da divisão é 0 ? = ${res}`);

// ESTRUTURA E CONDIÇÕES

// 6 - Classificação de faixa etária 0-12  13-17  18-59  60 ou mais.

const idadeUsuario = 90;

function classificarFaixaEtaria(idade){

  if(idade >= 0 && idade <= 12) {
    return "Crianção"
  }else if(idade >= 13 && idade <=17){
    return "Adolescente"
  }else if(idade >= 18 && idade <= 59){
    return "Adulto"
  }else {
    return "Terceira idade"
  }
}
const classificação = classificarFaixaEtaria(idadeUsuario)
console.log(classificação)

// 7 - Comparação de números

const num1 = 4;
const num2 = 3;

function comp(num1, num2){
    if(num1 > num2){
        return "O primeiro número é maior que o segundo"
    }else if(num1 < num2){
        return " O segundo número é maior que o primeiro"
    }else{
        return "Os números são iguais"
    }
}    
    const respostas = comp(num1, num2);
    console.log(respostas);
        
// 8 - calculadora com switch

const valor1 = 10;
const valor2 = 15;
const operador = "-";

function calcular(a, b, operador){

    let resutado

    switch(operador){
        case "+":
            resutado = a + b;
            break;
        case "-":
            resutado = a - b;
            break;
        case "*":
            resutado = a * b;
            break;
        case "/":
            resutado = a / b;
            break;
            default:
                return "operador inválido";
    }
    return `O resultado da operação é: ${resutado}`
}
const resultadoCalculo = calcular(valor1, valor2, operador)
console.log(resultadoCalculo)
console.log(calcular(10, 4, "-"));
console.log(calcular(100, 10, "*"));
console.log(calcular(5, 10 , "/"));
console.log(calcular(5, 10 , "854652"))

// 9 - Preço de tarifa com descontos relativos a idade e se for estudante

const idadePassageiro = 22
const tipoPasse = "estudante"

function calcularTarifa(idade, tipoPasse){
    const tarifaCheia = 2.50

    if(idade < 6){
        return "isento de tarifa"
    }
    let desconto = 0

    if(tipoPasse === "estudante"){
        desconto = .5
    }else if(tipoPasse === "idoso" && idade >=60){
        desconto = .3
    }
    return tarifaCheia * (1 - desconto)
}
const tarifa = calcularTarifa(idadePassageiro, tipoPasse);
console.log(`A tarifa para pessoa com ${idadePassageiro} anos e passe do tipo ${tipoPasse}, a tarifa fica no valor de R$${tarifa.toFixed(2)}`);

//Estruturas de Repetição

// 10 - somatório de 1 a N

const N = 44;
let soma = 0;

for(let i = 1; i<=N; i++){
    soma += i
}

console.log(`A soma dos números de 1 a ${N} é ${soma}`);

// Criar uma tabuada

const numero = 7;

for (let i = 1; i<=10; i++){
    console.log(`${numero} x ${i} = ${numero * i}`)
}

// 12 Números primos

const M = 50;

function isPrime(num){
    if(num < 1){
        return false;
    }
    for(let i = 2; i * i <= num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}
for (let i = 2; i <= M; i++){
    if(isPrime(i)){
        console.log(i)
    }
}

// 13 Exibição de Padroes usando * * *

const X = 20;

for (let i = 1; i <= X; i++){
    console.log("*".repeat(i))
}

// 14 - fibonacci

const Z = 100;

function fibonacciAteN(n){

let a = 0;
let b = 1;

let sequencia = [];


while(a <= n){
    sequencia.push(a)
const temp = a;
a = b;
b = temp + a;
 }

 return sequencia;
}
const sequenciaFibonacci = fibonacciAteN(Z);
console.log(`A sequência Fibonacci até ${Z} é:`, sequenciaFibonacci);




// Estudos sobre FUNÇÕES começa aqui ******************************************************************

