
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

// 41 Execução condicional

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