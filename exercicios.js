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

