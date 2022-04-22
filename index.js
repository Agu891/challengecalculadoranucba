const numeros = document.querySelectorAll("#botonesbox .btnNum")
const resultado = document.querySelector("#resultado")
const operadores = document.getElementsByClassName("btnOperator")
const borrar1 = document.getElementsByClassName("btnc")
let resultado2 = document.querySelector("#resultado2")
let num1 
let num2  

for(var i = 0; i < numeros.length; i++)

numeros[i].addEventListener("click" , (event)=>{
    let numeroFinal = event.target.value
    resultado.textContent = resultado.textContent + numeroFinal
   
})


for(var i = 0; i < operadores.length; i++)
operadores[i].addEventListener("click", (event) =>{
    let operador = event.target.value
    resultado.textContent = resultado.textContent + operador 
    resultado.value = resultado.textContent
  
})



function operadorinput () {
    num1 = parseFloat(resultado.value)
    
    for( let i = 0; i< resultado.textContent.length; i++)
  if(resultado.textContent[i] === "+"){
     resultado.textContent = ""
     resultado2.textContent= num1.toString() + "+" 
     
  } else if (resultado.textContent[i] === "-"){
    
    resultado.textContent = ""
    resultado2.textContent= num1.toString() + "-"
} else if (resultado.textContent[i] === "*"){
    
    resultado.textContent = ""
    resultado2.textContent= num1.toString() + "*"
} else if (resultado.textContent[i] === "/"){
    
    resultado.textContent = ""
    resultado2.textContent= num1.toString() + "/"
} 
}
  



function igual (){
    num2 = parseFloat(resultado.textContent)
    suma = num1 + num2
    resta = num1 - num2
    multiplicacion = num1 * num2
    division = num1 / num2 
    for( let i = 0; i< resultado2.textContent.length; i++)
     if(resultado2.textContent[i] === "+"){
        resultado2.textContent= num1.toString() + "+" + num2.toString()
     return resultado.textContent = suma
    } else if (resultado2.textContent[i] === "-"){
        resultado2.textContent= num1.toString() + "-" + num2.toString()
        return resultado.textContent = resta
    } else if (resultado2.textContent[i] === "*"){
        resultado2.textContent= num1.toString() + "*" + num2.toString()
        return resultado.textContent = multiplicacion
    }else if (resultado2.textContent[i] === "/"){
            resultado2.textContent= num1.toString() + "/" + num2.toString()
            return resultado.textContent = division 
        }
    
}


    


function borrar (){
    if(borrar1[0].value === "c"){
        resultado.innerHTML = ""
        resultado2.textContent = ""
    }
}



