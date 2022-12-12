//Función Async Es una declaración que define una función asyncrona que devuelve un objeto
//async es una palabra reservada para definir una función y dentro utilizar await, otra palabra reservada.

const asincronismo = ()=>{
    return new Promise((resolve,reject)=>{
        //dentro de la promesa hacemos validación 
        true ? setTimeout(()=> resolve('Async!!'),2000)
        : reject(new Error('Error en la promesa'))
    })
}

const anotherFunction = async ()=>{
    const algo = await asincronismo()

    console.log(algo)
    console.log('sigue funcionando')
}

console.log('Before')
anotherFunction()
console.log('After')