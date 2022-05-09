fetch('https://swapi.dev/api/planets2123/')
	.then((response) => {
		if(!response.ok) {
			// console.log("Error, not status 200", response.status);
			throw new Error(`Status Code Error: ${response.status}`);
		} else {
			response.json().then((data) => {
				for(let planets of data.results) {
					console.log(planets.name);
				}
			})
		}

	})
	.catch((err) => {
		console.log("something went wrong with fetch");
	})