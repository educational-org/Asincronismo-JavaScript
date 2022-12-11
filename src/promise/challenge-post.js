import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

function postData(urlAPI,data){
    const response = fetch(urlAPI,{
        method:'POST',
        //mode para CORS que son los permisos que tendrá la petición https://developer.mozilla.org/en-US/docs/Glossary/CORS
        mode:'cors',
        //pasar valores por defecto- si no hay autenticación pues no pasa nada
        credentials:'same-origin',
        //cabeceras para que reconozca la petición
        headers:{
            'Content-Type':'application/json'
        },
        //información a transmitir
        body: JSON.stringify(data)
    });
    return response;
}

const data = {
    "title": "206",
    "price": 1119,
    "description": "Esto es una pequeña descripción",
    "categoryId": 1,
    "images": ["https://i.imgur.com/HtdMOhl.jpg"]
  }

  postData(`${API}/products/`,data)
  .then(response=>response.json())
  .then(data => console.log(data))
  .catch(error=>console.log(error))
  .finally('Finalizó la petición')