//respuesta

let respuesta1 = "la plata"
let respuesta2 = "mar del plata"
let respuesta3 = "puerto"
let respuesta4 = "faro"

//pregunta

let pregunta1 = "cual es la capital de buenos aires?"
let pregunta2 = "cual es la ciudad feliz?"
let pregunta3 = "donde se encuentran los lobos marinos?"
let pregunta4 = "cual es la torre que se encuentra en la costa?"

let intentos = 3

//diferenciar respuestas

let respuestaMal = "mal"
let respuesta = "bien"

// funcion 

    function preguntar(pregunta, respuesta){
        while ((intentos >= 1) && (respuestaMal != respuesta)){
            respuestaMal = prompt(`${pregunta}`).toLowerCase()
            if(respuestaMal != respuesta){
                intentos = intentos - 1
                if (intentos >= 1){
                alert (` incorrecto! Te quedan ${intentos} intentos`)
                } else{
                    alert ("Te quedaste sin intentos")
                }
            }
        }
        
    }

//asignar valor a las preguntas

preguntar (pregunta1, respuesta1)
preguntar (pregunta2, respuesta2)
preguntar (pregunta3, respuesta3)
preguntar (pregunta4, respuesta4)

if (intentos >=1){
    alert("respuestas correctas! te ganaste un helado")
}





