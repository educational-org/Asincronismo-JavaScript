//vamos a instalar mediante npm nuestro paquete de XMLHttpRequest
// para que se pueda entender en la ejecución
//npm i xmlhttprequest

//indicamos que trabajaremos con este paquete
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
//creamos variable que hará referencia al recurso xmlhttprequest
//API será un string con la URL: representación a la API externa
const API = "https://api.escuelajs.co/api/v1";

//funcion que permite recibir la API y el callback anonimo para recibir la solicitud que nos entrega el llamado a la API
//fetchData( URL, CALLBACK)
function fetchData(urlAPI, callback){
//con XMLHttpRequest vamos a poder controlar todo el flujo del llamado y entender diferentes formas de hacer peticiones a una api.
    let xhttp = new XMLHttpRequest()
    //abrimos una conexión a la Api
    //xhttp.open(tipo de petición,url de la api,true o false para habilitar o deshabilitar)
    xhttp.open('GET',urlAPI,true)
    // escuchamos los estados que tiene la solicitud,.
    xhttp.onreadystatechange = function(event){
        //validamos el estado
        if(xhttp.readyState === 4){
        //ESTADOS
        //0 es no inicializado
        //1 loading 2 ejecutado 3 interactuando 4 se ha completado la llamada
            if(xhttp.status===200){
                //200 solicitud ha sido correcta
                //400 para errores
                //500 errores del server
                callback(null,JSON.parse(xhttp.responseText))
                //el primer parametro lo guardamos para reportar algun error
                //nulo y transformación de datos de string a json
            }else{
                //si hay algun error indicar:
                const error = new Error('Error '+ urlAPI)
                return callback(error, null)
            }
        } 
    }
    xhttp.send();
}
//fetch es una implementación más moderna para hacer una solicitud para realizar solicitudes.


//se ejecuta la petición de productos de nuestra API de Platzi
fetchData(`${API}/products`,function(err,data){
    //validamos errores con un if, en mi caso utilicé un if ternario
    (err) ? console.error(err):null
    //este segundo fetch llamara a un producto especifico según su id
    fetchData(`${API}/products/${data[0].id}`,function(err2,data2){
        //validar error 2
        (err2) ? console.error(err2):null
        //anidación de otro llamaod para obtener la información de data 2 y utilizarla en el mismo
        //se usa en data2 el optional chaining para evitar errores por si no existe la categoria o el id
        fetchData(`${API}/categories/${data2?.category?.id}`, function(err3, data3){
            // dejamos hasta 3 llamadas para no entrar en un callback-hell:anidar y anidar y crear un elemento irreconcible.
            //validacion
            (err3)? console.error(err3):null

            //imprimimos en consola, algunos elementos llamados en los callbacks
            console.log(data[0])
            console.log(".........................................................................")
            console.log(data2.title)
            console.log(".........................................................................")
            console.log(data3.name)
        })
    })
})