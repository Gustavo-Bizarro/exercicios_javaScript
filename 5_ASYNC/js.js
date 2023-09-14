
// CallBack

// 39 - Temporizador personalizado

function TemporizadorPeronalizado(segundos, acao){
    setTimeout(acao, segundos * 1000)
}
TemporizadorPeronalizado(3,() => {
    console.log("3 segundos se passaram!")
});

// 40 - Mapear array

function mapearArray(valores, transformacao){
    
    const resultado = []

    for(const valor of valores){
        resultado.push(transformacao(valor))
    }
    return resultado
}

const numeros = [1, 2, 3, 4, 5]
const quadrados = mapearArray(numeros, (numero) => numero * numero)

console.log(numeros) // array original, sem modificação
console.log(quadrados) // resultado do array

// 41 - Execução condicional

function executarCondicional (verificar, executar, nãoExecutar){

    if(verificar()) {
        executar()
    }else{
        nãoExecutar()
    }
}

executarCondicional(
    () => 5 > 3,
    () => console.log("5 é maior que 3"),
    () => console.log("condição invalida")
)

// Promises e fetch

// 42 - Simulação de API


function simularApi( resultado, tempoResulucao){
return new Promise((resolve) => {

    setTimeout(() => {
        resolve(resultado)
    }, tempoResulucao);

})
}

simularApi("Olá Mundo!", 5000).then((resultado) => {
    console.log(resultado)
});


// 43 - Carregando dados com fetch

function carregaDadosFetch(url){
 return fetch(url).then((Response) => Response.json())
}

carregaDadosFetch("https://jsonplaceholder.typicode.com/todos/1").then((dados) => {
    console.log(dados)
})


// 44 - cadeias de promises 

async function executarEmSequencia(urls){
    const dadosArray = [];

    for(const url of urls){
        const dados = await carregaDadosFetch(url)

        dadosArray.push(dados)
    }
    return dadosArray
}

const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
    "https://jsonplaceholder.typicode.com/todos/4",
    "https://jsonplaceholder.typicode.com/todos/69"
]

executarEmSequencia(urls).then((dadosArray) => {
    console.log(dadosArray)
})


// 45 - Retry com promises

function tentarNovamente(funcao, maxTentativas, intervalo){

    return new Promise(async(resolve, reject) => {
        for(let tentativa = 1; tentativa <= maxTentativas; tentativa++){
             try {
                const resultado = await funcao()
                return resolve(resultado)
             } catch (error) {

                if(tentativa === maxTentativas) return reject(error)

                await new Promise((r) => setTimeout(r, intervalo));

             }
            }
    })
}
const fetchComRetry = () => fetch("https://jsonplaceholder.typicode.com/todos/1")

tentarNovamente(fetchComRetry, 3, 1000)
.then((Response) => Response.json())
.then((dados) => console.log("Dados Processando corretmente",dados))
.catch((error) => console.log("falha apos tres tentativas"))
