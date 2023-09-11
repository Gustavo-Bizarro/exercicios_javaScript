
// - DOM -

// 30 -Selecionar elemento e modificar conteúdo

document.getElementById("titulo").innerText = "Ola Mundo!!!";

// 31 - Selecionar e alterar o css

const paragrafos = document.querySelectorAll(".paragrafo")
for(const paragrafo of paragrafos){
    paragrafo.style.color = "green"
    paragrafo.style.background = "yellow"
}

// 32 - Alternar classe de elemento

function alternarAtivo(){
    const quadrado = document.querySelector(".quadrado");
    quadrado.classList.toggle("ativo")
}
const btn = document.querySelector("#botao-alternar")
btn.addEventListener("click", () => {
    alternarAtivo()
});

// 33 - Adicionando elementos pelo DOM

function adicionarItem(){
    const novoItem = document.createElement("li")
    novoItem.textContent = "Novo Item criado"
    document.querySelector(".lista").appendChild(novoItem)
}

const botaoAdicionar = document.querySelector("#adicionarItem")
botaoAdicionar.addEventListener("click", adicionarItem)

// 34 - Remover elemento por DOM

function removerItem(event) {

    const itemClicado = event.target

    itemClicado.remove()
}

const itens = document.querySelectorAll(".item")

for(const item of itens){
    item.addEventListener("click", removerItem)
}

// 35 - Filtrar itens

function filtrarLista(){

    const filtro = document.querySelector("#filtro").value.toUpperCase()

    const lista = document.querySelector("#listaDeItens")

    const itens = document.getElementsByTagName("li")

    for(let i = 0; i < itens.length; i++){
        const item = itens [i]

        const texto = item.textContent || item.innerText

        item.style.display = texto.toUpperCase().includes(filtro) ? "" : "none";

    }
}

const inputFiltro = document.querySelector("#filtro");
inputFiltro.addEventListener("keyup", filtrarLista)

// - 36 mover itens

function moverItem(direcao){
    const lista = document.querySelector("#listaMover");
    const itens = Array.from(lista.querySelectorAll("li"));
    const itemSelecionado = lista.querySelector(".selecionado");

    if(!itemSelecionado){
        alert("selecionar um item")
        return;
    }

    const index = itens.indexOf(itemSelecionado)

    if(direcao === "cima" && index > 0){
        lista.insertBefore(itemSelecionado, itens[index -1])
    }else if(direcao === "baixo" && index < itens.length -1){
        lista.insertBefore(itemSelecionado.nextElementSibling, itens[index])
    }
}

function selecionarItem(event){
    const itens = document.querySelectorAll("#listaMover li")
    
    itens.forEach((item) => item.classList.remove("selecionado"));
    event.target.classList.add("selecionado")
}

const itensDaLista = document.querySelectorAll("#listaMover li")


itensDaLista.forEach((item) => item.addEventListener("click", selecionarItem))

const botaoCima = document.querySelector("#moverCima")
const botaoBaixo = document.querySelector("#moverBaixo")

botaoCima.addEventListener("click", () => moverItem("cima"))
botaoBaixo.addEventListener("click", () => moverItem("baixo"))

// 37 - Modal

function abrirModal(){
document.querySelector("#myModal").style.display = "block"
}
function fecharModal(){
    document.querySelector("#myModal").style.display = "none"
}

const abrirBtn = document.querySelector("#abrir")
const fecharBtn = document.querySelector(".close")

abrirBtn.addEventListener("click" , abrirModal)
fecharBtn.addEventListener("click" , fecharModal)


// 38 - Accordion

function toggleAcordion(event){
    const header = event.target
    const content = header.nextElementSibling

if(content.style.display === "none" || content.style.display === ""){
    closeAllAccordionContent()
    content.style.display = "block"
}else{
    content.style.display = "none"
 }
}

function closeAllAccordionContent(){
    const contents = document.querySelectorAll(".accordion-content") 
    contents.forEach((content) => (content.style.display = "none"))
}

const header = document.querySelectorAll(".accordion-header")

header.forEach((header) => header.addEventListener("click", toggleAcordion));