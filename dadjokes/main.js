const btnChistes = document.getElementById("btnChistes")
const chistes = document.getElementById("chistes")

btnChistes.addEventListener("click",generarChistes)

async function generarChistes(){
      try {
        let res = await fetch("https://icanhazdadjoke.com",{
            headers:{
                "accept":"application/json"
            }
            })
            const data = await res.json()
            console.log(data)
            chistes.innerHTML = data.joke
      } catch (error) {
            console.error(error)
        
      }

}