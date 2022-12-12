import fetch  from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi){
    //voy por los datos con el fetch
    const respuesta = await fetch(urlApi);
    //los guardo en formato json, en la variable data.
    const data = await respuesta.json()
    return data;
}
const anotherFunction = async (urlAPI)=>{
    //try toda la logica when resolve
    try{
        //hacemos petición de los productos en nuestra API
        const productos = await fetchData(`${urlAPI}/products`)
        //hacemos petición del primer producto
        const producto = await fetchData(`${urlAPI}/products/${productos[0].id}`)
        //petición de categoria
        const categoria = await fetchData(`${urlAPI}/categories/${producto.category.id}`)

        console.log(productos);
        console.log(producto.title);
        console.log(categoria.name);
    }
    //catch when rejected
    catch (error){
        console.error(error)
    }
}
anotherFunction(API)