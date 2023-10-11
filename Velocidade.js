//Cria referência ao form e elementos de resposta do programa

const form = document.querySelector("form")
const resp = document.querySelector("h3")


// ouvinte


form = addEventListener("submit", (e) =>{
e.preventDefault()                

const permitida = Number(form.inVelocidadePer.value)
const condutor = Number(form.inVelocidadeCon.value)
let leve = permitida + (permitida *0.2)


//Cria as condicionais

if(condutor <= permitida) {
        resp.innerText = `Situação: Sem Multas`
} else if (condutor <= leve) {
    resp.innerText = `Situação: Multa Leve`
} else{
    resp.innerText = `Situação: Multa Grave...`        
}  
})