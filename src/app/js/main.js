
const API = 'https://fifa-2022-schedule-and-stats.p.rapidapi.com'
const APIFlags = 'https://api-football-v1.p.rapidapi.com/v3/teams/countries';
const feature_container= null || document.querySelector(".container-featured-match")

//options para solicitar la información de los partidos
const optionsMatch = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c7f3bda2cbmsh332bcf6d6567eb4p135f3djsn0e3bd50a8b2c',
		'X-RapidAPI-Host': 'fifa-2022-schedule-and-stats.p.rapidapi.com'
	}
};
// options para solicitar las urls de imagenes de las banderas ya que la otra API no las trae
const optionsFlags = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c7f3bda2cbmsh332bcf6d6567eb4p135f3djsn0e3bd50a8b2c',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

//estructura reutilizable de fetch admitiendo distintos options
async function fetchData(urlAPI,options){
    const response = await fetch(urlAPI,options)
    const data = await response.json()
    return data
}
//solicito de forma asyncrona la información de los partidos y los imprimo en el DOM
async function getFeatureMatch(urlAPI,dateMatch){
    try{
        const response = await fetchData(`${urlAPI}/schedule?date=${dateMatch}`,optionsMatch)
        const match = response.matches[0]
        const flags = await getFlags(APIFlags,match.Home.ShortClubName,match.Away.ShortClubName)
        var date = new Date(match.LocalDate)
        var options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
        let time =`
            ${date.getUTCHours()}:
            ${date.getUTCMinutes() == "0"? "00":none}:
            ${date.getUTCSeconds() == "0"? "00":none}`
        console.log(date)

        let template = `
            <h1>${match.CompetitionName[0].Description}</h1>
            <p>Partido Destacado</p>
            <div class="stageName">
                <p>${match.StageName[0].Description} ${match.MatchTime || ""}</p>
            </div>
            <div class="flags-and-score">
                <img src="${flags[0].flag}" alt="">
                <span>${match.Home.ShortClubName}</span>
                <span class="score-feature-match">${match.HomeTeamScore || 0}</span>
                <span class="vs-feature-match">VS</span>
                <span class="score-feature-match">${match.AwayTeamScore || 0}</span>
                <span>${match.Away.ShortClubName}</span>
                <img src="${flags[1].flag}" alt="">
            </div>
            <div class="date-and-stadium">
                <p> ${date.toLocaleDateString("es-ES", options)} - ${match.Stadium.Name[0].Description} </p>
                <p>${time}</p>
            </div>
        `
        feature_container.innerHTML = template
    }catch(err){
        console.error(err)
    }
}
//Obtendremos las banderas de los paises, esta función se usa en el getFeatureMatch
async function getFlags(url,home,away){
    try{
        const response = (await fetchData(url, optionsFlags)).response
        const homeTeam = await response.filter(country => country.name == home)
        const awayTeam = await response.filter(country => country.name == away)
        //organizar el array en un solo plano
        const countriesFlags= await [homeTeam,awayTeam].flat()
        return countriesFlags;
    }catch(err){
        console.error(err)
    }
}


//Para ejecutar, se pasa la fecha en el formato: 2022-12-09 YYYY-MM-DD
getFeatureMatch(API,'2022-12-13')


