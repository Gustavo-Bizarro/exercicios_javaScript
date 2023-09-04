//Funções

// 15 - Vereificar Par ou Impar


const numero = 6

function parOuImpar(numero){
    if(numero % 2 === 0){
        return "Par"
    }else{
        return "Impar";
    }
}

const result = parOuImpar(numero);
console.log(`o número ${numero} é ${result}`);

// 16 - Encntrar fatorial de um número


function fatorial(n){

    if(n === 0 || n ===1){
        return 1;
    }else{
        return n * fatorial(n - 1);
    }

}
const n = 5;

const resultadofatorial = fatorial(n);
console.log(`o fatorial de ${n} é ${resultadofatorial}`);

// 17 - Maximo e minimo

function maximo(a, b){
    return a > b ? a : b;
}

function minimo(a, b){
    return a < b ? a : b;
}
const num1 = 25;
const num2 = 9;


console.log(`O maior valor entre ${num1} e ${num2} é ${maximo(num1, num2)}`);
console.log(`O menor valor entre ${num1} e ${num2} é ${minimo(num1, num2)}`);

// 18 - inversão de string

function inversaoString(str){
    return str.split("").reverse().join("");
}
const textoParaInverter = "JavaScript";

const textoParaInvertido = inversaoString(textoParaInverter);

console.log(`A string "${textoParaInverter}" invertida é "${textoParaInvertido}"`);

// 19 - Contador de Vogais

function contarVogais(str){
    const vogais = "aeiouAEIOU";
    let count = 0;

    for(let i = 0; i < str.length; i ++){
        if(vogais.includes(str[i])){
            count++;
        }
    }
    return count;
}

const texto = "Agrupador"
const contagemDeVogais = contarVogais(texto);
console.log(`"A quantidade de vogais na string" ${texto} é ${contagemDeVogais}`);

// 20 - Políndromo

function ehPalindromo(str){

    const strInvertida = str.split("").reverse().join("");

    return str.toLowerCase() === strInvertida.toLowerCase();
}
const textoParaTeste = "ana"
const resultadoPalindromo = ehPalindromo(textoParaTeste);

console.log(`A string  ${textoParaTeste} é um palindromo? ${resultadoPalindromo ? "Sim" : "Não"}`);



// 21 - Array de números aleatórios

//function gerarArrayAleatorio(tamanho, maxValor){
//const arr = []

//for (let i = 0; i < tamanho; i ++){
  //  arr.push(Math.floor(Math.random() = (maxValor + 1)));
//}

//return arr;

//}

//const tamanho = 10;
//const maxValor = 50;

//const resultadoArray = gerarArrayAleatorio(tamanho, maxValor);

//console.log(`O valor array gerado de números aleatórios é: [${resultadoArray.join(", ")}]`)

// 22 - Encontrar o elemento mais frequncia de elementos no array.

function encontrarMaisFrequente(arr){

    const contador = {}

    let elemento = arr[0]

    let maxContagem = 1

    for(const valor of arr){

        if(!contador[valor]){
            contador[valor] = 1;
        }else{
            contador[valor]++;
        }
        if(contador[valor] > maxContagem){
            maxContagem = contador[valor]
            elemento = valor;
        }
    }
    return [elemento, maxContagem]
}
const numeros =  [ 2, 3, 4, 2, 1, 5, 2, 1, 4, 4, 4, 4];

const resultadofrequancia = encontrarMaisFrequente(numeros)
console.log(`o elemento mais frenquente no array o ${resultadofrequancia[0]} ele apareceu ${resultadofrequancia[1]}`)