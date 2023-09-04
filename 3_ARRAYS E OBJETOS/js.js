
//ARRAY

// 23 - Remover elementos duplicados

function removerDulicada(arr){
    return Array.from(new Set(arr));
}

const arrayOriginal = [1,2,3,3,3,3,4,4,4,5,6,7,8,9];
const arraySemDuplicatas = removerDulicada(arrayOriginal);

console.log(`o array com duplicatas: ${arrayOriginal} e agora o Array sem duplicatas: ${arraySemDuplicatas}`)


// 24 Contatenação de arrays

function concatenarArrayes(arr1, arr2){
    return arr1.concat(arr2)
}

const array1 = [0,1,2,3]
const array2=[4,5,6,7,8,9,10]

const arrayConcatenado = concatenarArrayes(array1, array2)

console.log(`Array concatenado: [${arrayConcatenado.join(", ")}]`);


// 25 - Exercicio de Interseção

function InterseçãoArray(arr1, arr2){
    return arr1.filter((elemento) => arr2.includes(elemento))
}

const array3 = [ 1,2,3,4, 5]
const array4 = [4,5,6,7,8]

const arrayIntersecao = InterseçãoArray(array3, array4);

console.log(`A interseção entre os Array é [${arrayIntersecao.join(", ")}] `);

// 26 - Média dos elementos do array

function mediaArray(arr){
    const soma = arr.reduce((acululador, valor) => acululador + valor, 0)

    return soma/ arr.length
}

const numeros = [1,2,3,4,5,6,7,8,9];

const media = mediaArray(numeros)

console.log(`A média dos elementos é: ${media}`)