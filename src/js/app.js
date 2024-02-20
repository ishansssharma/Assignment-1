//Function for switching pages
const overviewButtons = document.querySelectorAll(".overview__button");
const categories = document.querySelectorAll(".list");

overviewButtons.forEach(BBBButtons => {
	function showList(event) {
		const button = event.currentTarget;
		const listToDisplay = button.dataset.category;

		categories.forEach(category => {
			category.classList.remove("list--visible");

			if (category.dataset.list === listToDisplay) {
				category.classList.add("list--visible");
			}

		});



	}
	BBBButtons.addEventListener("click", showList)
})


//Running the function when the buttons are clicked

const fetchInfo = async () => {
	const responseFilms = await fetch("https://swapi.dev/api/films/")
	const result1 = await responseFilms.json();
	console.log(result1.results);


	const responsePeople = await fetch("https://swapi.dev/api/people/")
	const result2 = await responsePeople.json();
	console.log(result2.results);

	const responsePlanets = await fetch("https://swapi.dev/api/planets/")
	const result3 = await responsePlanets.json();
	console.log(result3);

	const responseVehicles = await fetch("https://swapi.dev/api/vehicles/")
	const result4 = await responseVehicles.json()
	console.log(result4.results);


	renderFilms(result1.results);
	renderPeople(result2.results);
	renderPlanets(result3.results);
	renderVehicles(result4.results);

}

fetchInfo()