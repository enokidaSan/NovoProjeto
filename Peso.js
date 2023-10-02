//Cria referência ao form e elementos de resposta do programa

const form = document.querySelector("form")
const resp1 = document.querySelector("h3")


//Cria um ouvinte
form.addEventListener("submit", (e) =>{
e.preventDefault()                 


const nome = form.inNome.value           
const masculino = form.inMasculino.choked
const Altura = Number(form.InAltura.value)

//calculando o peso ideal
let peso
if (masculino) {
        peso = 22 * Math.pow(Altura, 2)
} else {
        peso = 21 * Math.pow(Altura, 2)
}

//resposta
resp.innerText = `${nome} seu peso ideal é ${peso.toFixed(3)} kilo, quero dizer, voce esta gordo`
})

//segundo ouvinte, limpa o k9

form.addEventListener("reset",(e) =>{
        resp1.innerText = ""
})