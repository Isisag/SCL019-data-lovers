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


<<<<<<< HEAD:src/test.js
    const imgTest = document.getElementById("img-test").src = `${imgResource}`
    const divTest = document.getElementById("data-test").innerHTML = characterName;
=======
        // traer las propiedades
        // var arreglo = results[2]
        // var characterName = arreglo.name
        // var imgResource = arreglo.image
>>>>>>> 24a56737225779a208d5e8089e18ff250965d35c:src/tests files/test.js


    console.log(arreglo)
    console.log(characterName)



}
getData();


const frutas = []
frutas.push('banana', 'manzana', 'pera')

console.log(frutas.length)

<<<<<<< HEAD:src/test.js
// console.log(example, data);
=======
console.log(example, data);
>>>>>>> 24a56737225779a208d5e8089e18ff250965d35c:src/tests files/test.js
