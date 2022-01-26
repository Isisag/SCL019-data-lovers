import { example } from '../data.js';
// import data from './data/lol/lol.js';
import data from '../data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';



function getData() {

    const allData = data;
    const results = data.results; //array
    const characters = data.results.id

    console.log(characters)
    console.log(results)
    console.log(results[0])

    const rickSanchez = results[0]; // posicion del personaje

    console.log(Object.values(rickSanchez)) // DEVUELVE un array con todas las Keys   // NOTAS:: no se puede usar Object.values para iterar un objeto
    console.log(Object.entries(rickSanchez)) // DEVUELVE cada key como un array


    let testing = Object.entries(rickSanchez)

    //MUESTRA LA INFORMACION de manera desglosada
    for (const [key, value] of Object.entries(rickSanchez)) {
        console.log(value)

        // keys + valores
        const valores = key + " " + value
        console.log(valores)
    }

    // muestras las llaves del objeto
    for (let key in rickSanchez) {
        console.log(key)
    }



    let elementos = results.map(function(item) {
        // return results.id
        const charactersNameMap = item.name
        const charactersSpeciesMap = item.species
        const charactersImageMap = item.image
        const charactersStatusMap = item.status

        let li = document.createElement("li")
        let create = document.body.appendChild(li)
        let pushText = create.innerHTML = `<li> ${charactersNameMap} </li>`

        let image = document.createElement("img")
        let createImg = document.body.appendChild(image)
        let showImage = createImg.src = `${charactersImageMap}`

        return {
            pushText,
            showImage
        }

    });


    console.log(elementos)




    // traer las propiedades
    var arreglo = results[2]
    var characterName = arreglo.name
    var imgResource = arreglo.image


<<<<<<< HEAD
    src / test.js
    src / tests, files / test.js
    const imgTest = document.getElementById("img-test").src = `${imgResource}`
    const divTest = document.getElementById("data-test").innerHTML = characterName;

=======
    // const imgTest = document.getElementById("img-test").src = `${imgResource}`
    // const divTest = document.getElementById("data-test").innerHTML = characterName; 
>>>>>>> 0717c0626255468e8cbeff3bd65ee4fe25db5dc7
    // traer las propiedades
    // var arreglo = results[2]
    // var characterName = arreglo.name
    // var imgResource = arreglo.image



    console.log(arreglo)
    console.log(characterName)



}
getData();


const frutas = []
frutas.push('banana', 'manzana', 'pera')

console.log(frutas.length)

console.log(example, data);
//ESCONDER ELEMENTOS DEL MENU
const navToggle = document.querySelector("#toggle");
const btnNav = document.querySelector("#btnNav");
const navSubtitle = document.querySelector(".nav_subtitles");
const navElements = document.querySelector("#navElements");
const navContainer = document.querySelector(".navContainer");

btnNav.addEventListener("mouseover", () => {
    navElements.classList.toggle("nav-menu_invisible");
});
console.log(navToggle);

//menu desplegable

function toggleClass(elem, className) {
    if (elem.className.indexOf(className) !== -1) {
        elem.className = elem.className.replace(className, '');
    } else {
        elem.className = elem.className.replace(/\s+/g, ' ') + ' ' + className;
    }

    return elem;
}

function toggleDisplay(elem) {
    const curDisplayStyle = elem.style.display;

    if (curDisplayStyle === 'none' || curDisplayStyle === '') {
        elem.style.display = 'block';
    } else {
        elem.style.display = 'none';
    }

}

function toggleMenuDisplay(e) {
    const dropdown = e.currentTarget.parentNode;
    const menu = dropdown.querySelector('.menu');
    const icon = dropdown.querySelector('.fa-angle-right');

    toggleClass(menu, 'hide');
    toggleClass(icon, 'rotate-90');
}

function handleOptionSelected(e) {
    toggleClass(e.target.parentNode, 'hide');

    const id = e.target.id;
    const newValue = e.target.textContent + ' ';
    const titleElem = document.querySelector('.dropdown .title');
    const icon = document.querySelector('.dropdown .title .fa');


    titleElem.textContent = newValue;
    titleElem.appendChild(icon);

    //probocar  un evento personalizado
    document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
    //setTimeout es usado así la transicion se muestra apropiedamente
    setTimeout(() => toggleClass(icon, 'rotate-90', 0));
}

function handleTitleChange(e) {
    const result = document.getElementById('result');

    result.innerHTML = 'The result is: ' + e.target.textContent;
}
//obtiene elementos
const dropdownTitle = document.querySelector('#navContainer, #navElements');
const dropdownOptions = document.querySelectorAll('#navContainer, #navElements');

//vincula listeners a estos elementos
dropdownTitle.addEventListener('click', toggleMenuDisplay);
dropdownOptions.forEach(option => option.addEventListener('click', handleOptionSelected));
document.querySelector('#navContainer, #navElements').addEventListener('change', handleTitleChange)