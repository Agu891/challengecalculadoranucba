const numeros = document.querySelectorAll("#botonesbox .btnNum")
const resultado = document.querySelector("#resultado")
const operadores = document.querySelectorAll("#botonesbox .btnOperator")
const borrar1 = document.querySelectorAll("#botonesbox .btnc")
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
    
  
})

 function igual(){  
    for( let i = 0 ; i< resultado.textContent.length ; i++)
    if(resultado.textContent[resultado.textContent.length -1] === "+" || resultado.textContent[resultado.textContent.length -1] === "-" || resultado.textContent[resultado.textContent.length -1] === "*" || resultado.textContent[resultado.textContent.length -1] === "/"){
        return resultado.textContent = "Entrada incorrecta"
    }else
     resultado2.textContent = resultado.textContent
    return resultado.textContent = eval(resultado.textContent)
 }

//  function operadorinput () {
//      num1 = parseFloat(resultado.textContent)  
//      for( let i = 0; i< resultado.textContent.length; i++)
//    if(resultado.textContent[i] === "+"){
//       resultado2.textContent = ""
//       resultado.textContent= num1.toString() + "+"    
//    } else if (resultado.textContent[i] === "-"){  
//      resultado2.textContent = ""
//      resultado.textContent= num1.toString() + "-"
//  } else if (resultado.textContent[i] === "*"){  
//      resultado2.textContent  = ""
//      resultado.textContent= num1.toString() + "*"
//  } else if (resultado.textContent[i] === "/"){  
//      resultado2.textContent = ""
//      resultado.textContent= num1.toString() + "/"
//  } 
//  }
  



//  function igual (){
//      num2 = parseFloat(resultado2.textContent)
//     let suma = num1 + num2
//      let resta = num1 - num2
//      let multiplicacion = num1 * num2
//       let division = num1 / num2 
//      for( let i = 0; i< resultado.textContent.length; i++)
//       if(resultado.textContent[i] === "+"){
        
//       return resultado.textContent = suma
//      } else if (resultado.textContent[i] === "-"){
       
//          return resultado.textContent = resta 
//      } else if (resultado.textContent[i] === "*"){
         
//          return resultado.textContent = multiplicacion
//      }else if (resultado.textContent[i] === "/"){
//              return resultado.textContent = division 
//          }  
//  }


    


function borrar (){
    
    if(borrar1[0].value === "ac"){
        resultado2.textContent = ""
        return resultado.textContent = ""
        
    } }



