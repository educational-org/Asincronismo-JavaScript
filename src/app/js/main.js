
const API = 'https://api-football-v1.p.rapidapi.com/v3/teams/countries';
const contenedor = null || document.querySelector('#plantilla-container');
console.log(contenedor)
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c7f3bda2cbmsh332bcf6d6567eb4p135f3djsn0e3bd50a8b2c',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

//funcion asyncrona para pedir los datos al servidor 
async function fetchData(urlAPI){
    const response = await fetch(urlAPI,options)
    const data = await response.json()
    return data
}

//permiten automaticamente llamar las funciones.
//con estra estructura, al momento en que sea interpretada, se ejecutará esta función
// (async ()=>{ })();

(async ()=>{
    try{
        const data = await fetchData(API)
        let countries = data.response;
        //aquí filtro todos los paise que cuenten con bandera asignada
        countries = countries.filter(country => country.flag !== null)
        let plantilla = `       
        ${countries.map(country=>`
            <div class="group relative">
                <div class="w-full aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img width="100" src="${country.flag}" alt="${country.name}">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${country.name}
                    </h3>
                </div>
            </div>
        `).slice(0,10).join('')}
        `
        contenedor.innerHTML = plantilla;

        
    }catch (err){
        console.error(err)
    }
})();