fetch('https://swapi.dev/api/films')
    .then(response => response.json())
    .then(response => {
        response.results.forEach(film => {
            let filmBox = document.createElement('div')
            document.querySelector('body').appendChild(filmBox)
            filmBox.innerHTML = `
        <h1>${film.title}</h1>
        `
        /*  if (starships) {
                let starships = document.createElement('ul')
                filmBox.appendChild(starships)

                film.starships.forEach(star => {
                    fetch(star)
                        .then(response => response.json())
                        .then(response => {
                            let starLi = document.createElement('li')
                            starLi.innerText = `${response.name}`
                        })
                })
            }

            */


            let specList = document.createElement('ul')
            filmBox.appendChild(specList)
            specList.innerHTML = `<h3>Algunas especies que hay en la película son:</h3>`

            film.species.forEach(species => {
                fetch(species)
                    .then(response => response.json())
                    .then(response => {
                        let spec = document.createElement('li')
                        spec.innerText = `${response.name}`
                        specList.appendChild(spec)
                    })
                    .catch(err => console.log('PIRAÑA', err))
            })

            let characters = document.createElement('ul')
            filmBox.appendChild(characters)
            characters.innerHTML = `<h3>Los personajes que aparecen son:</h3>`

            film.characters.forEach(char => {
                fetch(char)
                    .then(response => response.json())
                    .then(response => {
                        let charLi = document.createElement('li')
                        charLi.innerText = `${response.name}`
                        characters.appendChild(charLi)
                    })
                    .catch(err => console.log('PIRAÑA', err))
            })

            let planets = document.createElement('ul')
            filmBox.appendChild(planets)
            planets.innerHTML = `<h3>Los planetas son:</h3>`

            film.planets.forEach(pla => {
                fetch(pla)
                    .then(response => response.json())
                    .then(response => {
                        let plaP = document.createElement('li')
                        plaP.innerText = `${response.name} con un clima ${response.climate}`
                        planets.appendChild(plaP)
                    })
            })






        })
    })
    .catch(err => console.log('PIRAÑA', err))
