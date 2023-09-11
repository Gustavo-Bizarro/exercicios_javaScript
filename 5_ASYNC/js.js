
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

console.log(numeros)
console.log(quadrados)