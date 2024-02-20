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

//Creating function for rendering the data on screen
function renderFilms(films) {

	films.forEach(film => {

		//CREATING ELEMENTS

		const ulFilms = document.querySelector(".filmslist")

		const li = document.createElement("li");
		const infoTitle = document.createElement("span");
		const infoCreated = document.createElement("span");
		const infoDirector = document.createElement("span");
		const infoEpisodeId = document.createElement("span");
		const infoReleaseDate = document.createElement("span");

		//APPENDING ELEMENTS
		ulFilms.appendChild(li);
		li.append(infoTitle, infoCreated, infoDirector, infoEpisodeId, infoReleaseDate)

		//ADDING CONTENT TO THE ELEMENTS 
		infoTitle.textContent = film.title
		infoCreated.textContent = film.created
		infoDirector.textContent = film.director
		infoEpisodeId.textContent = film.episode_id
		infoReleaseDate.textContent = film.release_date







	});
}

function renderPeople(people) {
	people.forEach(people => {
		//CREATING ELEMENTS
		const peopleList = document.querySelector(".peoplelist");

		const liPeople = document.createElement("li");
		const infoName = document.createElement("span");
		const infoHeight = document.createElement("span");
		const infoMass = document.createElement("span");
		const infoHairColor = document.createElement("span");
		const infoSkinColor = document.createElement("span");

		peopleList.appendChild(liPeople);
		liPeople.append(infoName, infoHeight, infoMass, infoHairColor, infoSkinColor);

		infoName.textContent = people.name
		infoHeight.textContent = people.height
		infoMass.textContent = people.mass
		infoHairColor.textContent = people.hair_color
		infoSkinColor.textContent = people.skin_color


	});
}

