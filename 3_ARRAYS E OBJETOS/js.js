
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

console.log(`A média dos elementos é: ${media}`);

// OBJETOS

// 27 Calcular a soma dos números em um objeto

const numerosObjetos = {
    a: 10,
    b: 15,
    c: 20
}
function somaValoresObjetos(obj){
    let soma = 0;
    for(const chave in obj){
        if(obj.hasOwnProperty(chave) && typeof obj [chave] === "number"){
            soma += obj[chave]
        }
    }
    return soma
}

console.log(`soma dos valores do objeto ${somaValoresObjetos(numerosObjetos)}`)


// 28 - Filtrando propriedades

const pessoa = {
    nome: "Joaquim",
    idade: 4,
    profissão: "Estudante da Pré Escola",
    robbies: ["Andar de bicicleta", "Brincar", "Ler livrinhos de Criança"],

};
function filtrarPropriedades(obj, propriedadesPermitidas){
    const newObj = {}
    for(const prop of propriedadesPermitidas)
    if(obj.hasOwnProperty(prop)) {
        newObj[prop] = obj[prop]
    }
    return newObj;
}
const propriedadesPermitidas = ["nome", "profissão"]

const pessoaFiltrada = filtrarPropriedades(pessoa, propriedadesPermitidas)

console.log(`Objeto pessoa filtrado com propriedades permitidas `)
console.log(pessoaFiltrada)
console.log(pessoa)

// 29 - Unindo Objetos

const objetoA = {a: 1, b: 2}
const objetoB = {nome: "Henrique", trabalhando: true}

function unirObjetos(obj1, obj2) {
    return {...obj1,...obj2}
}

const objetoUnido = unirObjetos(objetoA, objetoB)

console.log("Objeto unido")
console.log(objetoUnido)