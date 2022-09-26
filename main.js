'use strict'
/* importo la data */
import data from './advices.json' assert {type: 'json'};

/* lo guardo en un array */
let advices = [];
data.advices.forEach(advice => {
    advices.push(advice)
})

/* seleccionar los elementos */

const adviceContainer = document.querySelector('.advice'); /* Contenedor donde van los consejos y el indice */
const btnGenerator = document.querySelector('.btnGenerator'); /* Boton que lleva toda la interactividad */

btnGenerator.addEventListener('click', () => {
    /* Le doy la clase para animarlo, y después se la quito */
    btnGenerator.classList.add('btnGenerator--active');
    setTimeout(() => {btnGenerator.classList.remove('btnGenerator--active');}, 300)

    //  conseguir una frase 
    let indexAndAdvice =  getAdvice();

    /* actualizo el contenido */
    adviceContainer.innerHTML = 
        `<h1 class="advice__title">Advice <span id="indexAdvice">#${indexAndAdvice[0]}</span> </h1>
        <p class="advice__paragraph">"${indexAndAdvice[1]}"</p>`

})

// let aux = 0 /* Auxilidar que hace de indice para que sea en orden */

const getAdvice = () => {
    
    /* conseguir uno aleatorio */
    let index = Math.floor(Math.random() * advices.length)
    return [index, advices[index]]

    
    /* En orden */

    // let advice = advices[aux]  
    // aux++
    // if (aux == advices.length) {
    //     aux = 0
    // }
    // return [aux, advice] 
}



