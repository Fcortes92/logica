let factorial = 1
for (let i =1; i<=5;i=i+1){
    factorial = factorial*i
    console.log("iteracion",i)
}
console.log(factorial)

let  j=0
do{
    console.log(j);
    j++;
}while(j<5)
let frutas = ["manzana","banana","pera"];
    console.log(frutas[0]); //"manzana"
    console.log(frutas[2]); //"pera"
frutas[1] = "kiwi";
console.log(frutas); //["manzana","kiwi","pera"]
console.log(frutas.length)
for (let i=0; i<frutas.length;i++){
    console.log(frutas[i])
}

function sumar (a,b){
    let resultado = a+b
    return resultado
}

let resultadoSuma = sumar(4,6)

console.log(resultadoSuma)
