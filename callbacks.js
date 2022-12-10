//función normal
function sum(num1,num2){
    return num1 + num2
}

// Callback
function calc(num1,num2,callback){
    return callback(num1,num2)
}
console.log(calc(2,3,sum))

//SetTimeout también es un callback
setTimeout(()=>{
    console.log(calc(5,5,sum))
},2000)

//Set Timeout con argumentos

function saludar(name){
    console.log(`Hola yo soy ${name}`)
}

setTimeout(saludar,2000,'Juan Camilo')