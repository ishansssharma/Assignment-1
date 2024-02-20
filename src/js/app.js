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