const form = document.querySelector("form")
const resp = document.querySelector("#outResp")
const resp1 = document.querySelector("#outResp1")

//ouvinte
form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const ladoA = Number(form.inLadoA.value)
    const ladoB = Number(form.inLadoB.value)
    const ladoC = Number(form.inLadoC.value)

if((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoB)){
    alert("Não Forma um triângulo.")
    form.inLadoA.focus()
    form.inLadoB.focus()
    form.inLadoC.focus()
    return
}
 resp.innerText = `Lados podem formar um triângulo do`

if(ladoA == ladoB && ladoA == ladoC){
    resp1.innerText = `Tipo: Equilátero`
}
else if((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)){
    resp1.innerText = `Tipo: Isóceles`
} else{
    resp1.innerText = `Tipo: Escaleno`
}


























})