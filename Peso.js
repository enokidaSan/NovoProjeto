const form = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

//Cria um ouvinte


form.addEventListener("submit", (e) =>{
e.preventDefault()                 //evita o envio do form

const nome = form.inNome.value           //obtém o nome
const masculo = (form.inMasculo.value) //obtém a primeira nota
const afeminado = (form.inAfeminado.value) //obtém a segunda nota
const Altura = Number(form.inAltura.value)       //média das notas


//Cria as condicionais

if(altura =>1.7, sexo = masculo ) {
        resp2.innerText = `Parabéns ${nome}! Você é gordo
`
        resp2.style.color = "blue"
    } else if (media >=4) {
        resp2.innerText = `Atenção ${nome}! Você esta de
enxaqueca`
        resp2.style.color = "green"
    } else{
        resp2.innerText = `Ops ${nome}! Você foi
morto(a)`
        resp2.style.color = "red"
    }
})