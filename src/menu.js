const d = document;

function menuFilter() {

    const iconBars = d.getElementById("icon-bars");
    const navContainer = d.getElementById("navContainer")

    iconBars.addEventListener("click", () => {
        navContainer.classList.toggle("active");

    })

}
menuFilter()
