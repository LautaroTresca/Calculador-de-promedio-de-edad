// Ejercicio
// Calcular edad promedio de personas ingresadas

/*
Le pedimos al usuario que ingrese un nombre. Si desea no seguir ingresando nombres le decimos que ponga "stop"
Le pedimos al usuario que ingrese la edad.
Sumamos todas las edades y damos una alerta por pantalla del promedio de edad.
*/


let nombrePersona
let ingreseEdad
let edades = 0
let personas = 0


for (i = 0; i < 5; i++){
   nombrePersona = prompt("Ingrese el nombre de la persona. Ingrese siguiente para omitir").toLowerCase()
    if(nombrePersona == "siguiente"){
        break
    }
    else if(nombrePersona === ""){
        alert("Ingrese un nombre valido")
    }else{
       personas = personas + 1
    }            
}


for (i = 0; i < 5; i++){
    ingreseEdad = parseInt(prompt("ingrese la edad. Ingrese 0 para omitir"))
        if(ingreseEdad === 0){
            break
        }
        if(isNaN(ingreseEdad)){
            alert("ingrese una edad valida")
        }else{
            edades = edades + ingreseEdad
        }
}

function dividir(){
    return edades / personas
}

let promedio = dividir(edades / personas)

alert(`la edad promedio es de ${promedio}.`)
alert("Gracias por utilizar esta herramienta")
stop






    
   
    



    



        

        