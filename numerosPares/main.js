let calcular = document.getElementById("btn")
let entrada = document.getElementById("entrada")
let salida = document.getElementById("salida")
let numero = 0

entrada.addEventListener("input",(evento) => {
    numero = evento.target.value
    console.log(numero)
})
// ya tenemos el apr, ahora vamos a por que se diga si es par y mult
calcular.addEventListener("click",()=>{
    let hijo = document.createElement("li")
    if(numero%2 == 0 && numero %5 == 0){
        hijo.innerHTML = numero + " es par y multiplo de 5 "
    }else if(numero%2 == 0){
        hijo.innerHTML = numero + " es par "
    }else if(numero%5 == 0){
        hijo.innerHTML = numero + " es multiplo de 5 "
    } 
    else{
        hijo.innerHTML = numero + " no es par ni multiplo de 5 "
    }
    salida.appendChild(hijo)
})