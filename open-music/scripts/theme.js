const btnIcon = document.querySelector('#btn__icon');
const cabecalho = document.querySelector('#cabecalho');
const boxes = document.querySelectorAll('.div__box')

function changeClassBoxes(dark){
    
    if(dark == 'dark'){
        boxes.forEach(element => {
            element.classList.add('div__box-2')
        });
    }
    else{
        boxes.forEach(element => {
            element.classList.remove('div__box-2')
        });
    }
}

btnIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    cabecalho.classList.remove('header__color')
    changeClassBoxes(document.body.classList[0])


})
console.log(boxes)