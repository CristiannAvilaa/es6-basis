//traer la dependencia del componente suma

import {sumar, restar} from './sumar.js'
import materias from './materias.js'

/*Variables = let
let a = 10
//constantes = const
const b = 29



console.log(`suma de a + b: ${ sumar (a , b) }`)
console.log(`Restar de b - a: ${ restar (a , b) }`)*/


//desestructuración:
/*let {first_name , last_name, id} = estudiantes

console.log(`Nombre estudiante: ${ first_name}`)
console.log(`Apellido estudiante: ${ last_name }`)
console.log(`Id estudiante: ${id}`)*/

materias.forEach((materia)=>{
    if(materia.profesor === 'Cristian Buitrago'){
    console.log(`Materia: ${materia.name}`)
    console.log(`Notas: ${materia.notas}`)
    }
    })

// convertir a un arreglo de profesores
let profesores = materias.map(function(materia){
    return materia.profesor
})


//Agregar una materia al arreglo de materias
// push()
materias.push(
    {
        id:4, 
        name: "Cultura fisica",
        profesor: "Luis Baquero",
        notas: [
            2,
            5
        ]
    }
)

//Busqueda  en arreglos:
//find

const PHP = materias.find(function(materia){
    return materia.profesor === 'Cristian Buitrago'
})

console.log(PHP)