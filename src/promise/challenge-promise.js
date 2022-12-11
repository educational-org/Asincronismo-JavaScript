//instalaremos node fetch npm i node-fetch
// 

import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//fetch es una promesa.

function fetchData(urlAPI){
    return fetch(urlAPI);
};

// fetchData(`${API}/products`)
//     //obtenemos los productos y los pasamos a json con una función ternaria
//     .then(response=>response.json())
//     //mostraremos los productos en consola.
//     .then(products =>console.log(products))
//     //por si existen errores
//     .catch(error=>console.log(error))


//aquí podremos anidar de forma consecuente nuestra petición.
fetchData(`${API}/products`)
    .then(response => response.json() )
    .then(productos =>{
        console.log(productos)
        return fetchData(`${API}/products/${productos[10].id}`)
    })
    .then(response => response.json())
    .then(producto => {
        console.log(producto.title)
        return fetchData(`${API}/categories/${producto.category.id}`)
    })
    .then(response => response.json())
    .then(category =>{
        console.log(category.name)
    })
    .catch(error=>console.log(error))
    .finally(()=>console.log('Finally'))