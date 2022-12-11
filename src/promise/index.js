//creamos una variable que será la promesa
//Promise recibe una función anonima con dos argumentos, resolve, reject
const promise = new Promise((resolve,reject)=>{
    // cuando se resuelva retorna el mensaje hey
    resolve('hey')
})

const cows = 11;
const countCows = new Promise((resolve, reject)=>{
    // validamos si las vacas son mayor que diez
    if(cows > 10){
        //si es mayor a 10...
        resolve(`We have ${cows} cows in the farm`)
    }else{
        //sino...
        reject(`there are not enough cows in the farm`)
    }
    
})

//Ejecución de la promesa

countCows.then((result)=>{
    console.log(result)
}).catch((reject)=>{
    console.log(reject)
}).finally(()=>{
    console.log('Finally')
})