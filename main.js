let apiForm = document.querySelector('#submit_search')
let currentStandings = document.querySelector('#current_standings')

apiForm.addEventListener( 'submit', (e) => {
    e.preventDefault()

    let champ_year = e.target.elements['championship_year'].value
    let round = e.target.elements['round'].value


    fetch(`https://ergast.com/api/f1/${champ_year}/${round}/driverStandings.json`)
        .then( response => {return response.json() })
        .then( data => {
            // console.log(data)
        
        for (var row = 0; row < data.MRData.StandingsTable.StandingsLists[0].DriverStandings.length; row++){
            let findDriver = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[row]
            let nextPosition = document.createElement('tr')

            nextPosition.innerHTML = `
            <td>${findDriver.position}</td>
            <td>${findDriver.Driver.familyName}, ${findDriver.Driver.givenName}</td>
            <td>${findDriver.Driver.nationality}</td>
            <td>${findDriver.Constructors[0].name}</td>
            <td>${findDriver.points}</td>`

            currentStandings.appendChild(nextPosition)
        }
    })
})