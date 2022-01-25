import { example } from '../data.js';
// import data from './data/lol/lol.js';
import data from '../data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';



function getData() {

    const allData = data;  
    const results = data.results;  //array
    const characters = data.results.id

    console.log(characters)
    console.log(results)
    console.log(results[0])

    const rickSanchez = results[0]; // posicion del personaje

    console.log( Object.values(rickSanchez))   // DEVUELVE un array con todas las Keys   // NOTAS:: no se puede usar Object.values para iterar un objeto
    console.log( Object.entries(rickSanchez))  // DEVUELVE cada key como un array


    let testing = Object.entries(rickSanchez)

        //MUESTRA LA INFORMACION de manera desglosada
        for (const [key,value] of Object.entries(rickSanchez)){
            console.log(value)

            // keys + valores
            const valores = key + " " + value
            console.log(valores)
        }

        // muestras las llaves del objeto
        for ( let key in rickSanchez){
            console.log(key)
        }

        function addStyle(element){
            element.style.backgroundColor = "black"
            element.style.borderRadius = "20px"
            return element
        }
        
        
        let elementos = results.map( function( item ){
            // return results.id
            const charactersNameMap = item.name
            const charactersSpeciesMap = item.species
            const charactersImageMap = item.image
            const charactersStatusMap = item.status

            const card = document.getElementById('card')
            const cardImage = document.getElementById('card_image')
            const cardName = document.getElementById('card_name')
            const cardDiv = document.getElementById("card_section-container")
            const cardImageName = document.getElementById("card_image-name");


            // let create = document.body.appendChild(cardName)
            let h3 = document.createElement(h3)
            let intermedio = h3.innerHTML = `<h3 class="card_name" id="card_name"> ${charactersNameMap} </h3>`
            // let showName = create.innerHTML = `<h3 class="card_name"> ${charactersNameMap} </h3>`
            let test = cardImageName.appendChild(h3)

            // let li = document.createElement("li")
            // let create = document.body.appendChild(li)
            // let pushText = create.innerHTML = `<li class="prueba" > ${charactersNameMap} </li>`
           

            // let image = document.createElement("img")
            // let createImg = document.body.appendChild(image)
            // let showImage = createImg.src=`${charactersImageMap}`
            

            // let info = document.createElement("li")
            // let createInfo = document.body.appendChild(info)
            // let showInfo = createInfo.innerHTML = `
            // <li class="prueba" > Name: ${`${charactersNameMap} </li> 
            // <li class="prueba2"> Species: ${charactersSpeciesMap} </li>
            // <li class="prueba3"> Status:  ${charactersStatusMap}`} </li>`
            
           

            // return  showImage, showInfo;
            
            return test;
            
            

        });

        
        console.log(elementos)    
        

        // traer las propiedades
        var arreglo = results[2]
        var characterName = arreglo.name
        var imgResource = arreglo.image




        console.log(arreglo)
        console.log(characterName)



}getData();


console.log(example, data);


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