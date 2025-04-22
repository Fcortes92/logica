let calcular = document.getElementById("btn")
let entrada = document.getElementById("entrada")
let numero = 0
entrada.addEventListener("input",(evento) => {
    numero = evento.target.value
    console.log(numero)
})
calcular.addEventListener("click",()=>{
    console.log("calcular") 
})