
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = "https://api.escuelajs.co/api/v1";


function fetchData(urlAPI, callback){
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET',urlAPI,true)
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            if(xhttp.status===200){
                callback(null,JSON.parse(xhttp.responseText))
            }else{
                const error = new Error('Error '+ urlAPI)
                return callback(error, null)
            }
        } 
    }
    xhttp.send();
}

fetchData(`${API}/products`,function(err,data){
    (err) ? console.error(err):null
    fetchData(`${API}/products/${data[0].id}`,function(err2,data2){
        (err2) ? console.error(err2):null
        fetchData(`${API}/categories/${data2?.category?.id}`, function(err3, data3){
            (err3)? console.error(err3):null
            console.log(data[0])
            console.log(".........................................................................")
            console.log(data2.title)
            console.log(".........................................................................")
            console.log(data3.name)
        })
    })
})