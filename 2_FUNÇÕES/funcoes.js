//Funções

// 15 - Vereificar Par ou Impar


const numero = 6

function parOuImpar(numero){
    if(numero % 2 === 0){
        return "Par"
    }else{
        return "Impar"
    }
}

const result = parOuImpar(numero)
console.log(`o número ${numero} é ${result}`)

// 16 - Encntrar fatorial de um número


function fatorial(n){

    if(n === 0 || n ===1){
        return 1
    }else{
        return n * fatorial(n - 1);
    }

}
const n = 5;

const resultadofatorial = fatorial(n)
console.log(`o fatorial de ${n} é ${resultadofatorial}`)
