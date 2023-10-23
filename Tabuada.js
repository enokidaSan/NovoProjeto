//Cria referência ao form e elementos de resposta do programa

const frm = document.querySelector("form")
const resp = document.querySelector("pre")


// ouvinte
frm.addEventListener("submit", (e) =>{
e.preventDefault()                

const Numero = Number(frm.inNumero.value)
let resposta = "" 

for(let i = 1; i <=10; i++){
    resposta = resposta + Numero + " x " + i + " = " + (Numero * i) + "\n"
}
resp.innerText = resposta
})