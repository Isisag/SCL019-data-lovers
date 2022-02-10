import data from './data/rickandmorty/rickandmorty.js';

function menuFilter() {

    const iconBars = d.getElementById("icon-bars");
    const navContainer = d.getElementById("navContainer")

    iconBars.addEventListener("click", () => {
        navContainer.classList.toggle("active");

    })

}
menuFilter()
