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

        // let li = document.createElement("li")
        // let create = document.body.appendChild(li)
        // let pushText = create.innerHTML = `<li> ${charactersNameMap} </li>`

        // let image = document.createElement("img")
        // let createImg = document.body.appendChild(image)
        // let showImage = createImg.src = `${charactersImageMap}`

        const cardName = document.getElementById("card_name")
        const cardNameText = cardName.innerText(`${charactersNameMap}`)
        return {
           cardNameText
        }

    });


    console.log(elementos)




    // traer las propiedades
    var arreglo = results[2]
    var characterName = arreglo.name
    var imgResource = arreglo.image


    // const imgTest = document.getElementById("img-test").src = `${imgResource}`
    // const divTest = document.getElementById("data-test").innerHTML = characterName; 
    // traer las propiedades
    // var arreglo = results[2]
    // var characterName = arreglo.name
    // var imgResource = arreglo.image
   

    console.log(arreglo)
    console.log(characterName)

}getData();

const frutas = [];
frutas.push('banana', 'manzana', 'pera')
console.log(frutas.length)
console.log(example, data);

//ESCONDER ELEMENTOS DEL MENU
const navToggle = document.querySelector("#toggle");
const btnNav = document.querySelector("#btnNav");
const navSubtitle = document.querySelector(".nav_subtitles");
const navElements = document.querySelector("#navElements");
const navContainer = document.querySelector(".navContainer");

btnNav.addEventListener("click", () => {
    navElements.classList.toggle("nav-menu_invisible");
});
console.log(navToggle);

var first = 10;
console.log(first);


// let elementos = results.map( function( item ){
//     // return results.id
//     const charactersNameMap = item.name
//     const charactersSpeciesMap = item.species
//     const charactersImageMap = item.image
//     const charactersStatusMap = item.status

//     let li = document.createElement("li")
//     let create = document.body.appendChild(li)
//     let pushText = create.innerHTML = `<li class="prueba" > ${charactersNameMap} </li>`
   

//     let image = document.createElement("img")
//     let createImg = document.body.appendChild(image)
//     let showImage = createImg.src=`${charactersImageMap}`
    

//     let info = document.createElement("li")
//     let createInfo = document.body.appendChild(info)
//     let showInfo = createInfo.innerHTML = `
//     <li class="prueba" > Name: ${`${charactersNameMap} </li> 
//     <li class="prueba2"> Species: ${charactersSpeciesMap} </li>
//     <li class="prueba3"> Status:  ${charactersStatusMap}`} </li>`
    

//     return  showImage, showInfo;
//     // return divInfo;
    

// });
console.log(first);
