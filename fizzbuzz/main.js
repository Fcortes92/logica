let calcular = document.getElementById("btn")
let entrada = document.getElementById("entrada")
let salida = document.getElementById("salida")

let numero = 0

entrada.addEventListener("input",(evento) => {
    numero = evento.target.value
    console.log(numero);
});
    
calcular.addEventListener("click",()=>fizzbuzz(numero))

function fizzbuzz(numero){
    for(let i=1;i<=numero;i++){
        let hijo = document.createElement("li")
    if(i%3 == 0 && i%5 == 0){
        hijo.innerHTML="fizzbuzz"
    }else if(i%3==0){
        hijo.innerHTML="fizz"
    }else if(i%5==0){
        hijo.innerHTML="buzz"
    } 
    else{
        hijo.innerHTML = 1
    }
    salida.appendChild(hijo)
}}
