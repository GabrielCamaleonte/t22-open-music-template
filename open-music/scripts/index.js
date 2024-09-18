import { applyInputRangeStyle } from './inputRange.js'

function routine() {
    
    
}
console.log(applyInputRangeStyle())

import { albumList } from './albumsDatabase.js';

albumList.map((element)=>console.log(element))

function renderElements(cards){
    const boxes = document.querySelector('div')

    boxes.innerHTML = ""

    for(let i = 0; i < cards.length; i++){
        createCards(cards[i])
    }
}

function createCards(cards){
    const boxes = document.querySelector('div')

    const imgs = document.createElement('img');
    const title = document.createElement('h3');
    const band = document.createElement('div');
    const bandText = document.createElement('h5');
    const genre = document.createElement('h5');
    const buy = document.createElement('div');
    const buyText = document.createElement('h3');
    const btnBuy = document.createElement('button')

    boxes.appendChild(imgs);
    boxes.appendChild(title);
    band.appendChild(bandText);
    band.appendChild(genre);
    buy.appendChild(buyText);
    buy.appendChild(btnBuy)

    boxes.className = "div__box"
    title.className = "text__title"
    band.className = "div__band"
    buy.className = "div__buy"
    btnBuy.className = "btn__buy"

}
 console.log(boxes)


 