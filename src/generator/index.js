//crearemos una función

const { formDataToBlob } = require("formdata-polyfill/esm.min");

function* gen(){
    //yield nos permite tener los pasos que hay que seguir
    yield 1;
    yield 2;
    yield 3;
}

// g va a ser un generador y tendremos acceso al la palabra reservada next
const g = gen()

console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
//Podremos controlar cuando queremos ejecutar los elementos de una iteración.


//ejemplo 2
function* iterable(arreglo){
    for(let item of arreglo){
        yield console.log(item)
    }
}

const i = iterable(['Hello ','Mi Nombre ','Es ','Juan Camilo'])
//iteramos cada uno de los elementos del array independiente
i.next().value 
i.next().value
i.next().value
i.next().value