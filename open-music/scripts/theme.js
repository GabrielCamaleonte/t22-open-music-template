const btnIcon = document.querySelector('#btn__icon');
const cabecalho = document.querySelector('#cabecalho');
const boxes = document.querySelectorAll('.div__box')
const moonIcon = "./assets/icons/moon-icon.svg"
const sunIcon = "./assets/icons/sun-icon.svg"
const input = document.querySelectorAll('.input__genres')
const label = document.querySelectorAll('.label__genres')
let dark = localStorage.getItem('@openMusic:theme')||false

function changeClassBoxes(dark) {

    if (dark == 'dark') {
        boxes.forEach(element => {
            element.classList.add('div__box-2')
        });
    }
    else {
        boxes.forEach(element => {
            element.classList.remove('div__box-2')
        });
    }
}

function allBlack(){
    const isDarkMode = 'dark'
    document.body.classList.add('dark')
    cabecalho.classList.add('dark')
    buttonIcon(isDarkMode)
    inputDark(isDarkMode)
    labelDark(isDarkMode)
    changeClassBoxes(isDarkMode)
}

function changeThemeOnClick() {
    dark = !dark
        localStorage.setItem('@openMusic:theme', JSON.stringify(dark))
    console.log(dark)
    document.body.classList.toggle('dark')
    const darkClassList = document.body.classList[0]
    changeClassBoxes(darkClassList)
    cabecalho.classList.toggle('dark')
    buttonIcon(darkClassList)
    inputDark(darkClassList)
    labelDark(darkClassList)
    
}

btnIcon.addEventListener('click', () => {
    changeThemeOnClick()
})




function buttonIcon(dark) {
    if (dark == 'dark') {
        document.getElementById('icons').src = sunIcon
    }
    else {
        document.getElementById('icons').src = moonIcon
    }
}

function inputDark(dark) {
    if (dark == 'dark') {
        input.forEach(element => {
            element.classList.add('dark')
        });
    }
    else {
        input.forEach(element => {
            element.classList.remove('dark')
        });
    }
}
function labelDark(dark) {
    if (dark == 'dark') {
        label.forEach(element => {
            element.classList.add('dark')
        });
    }
    else {
        label.forEach(element => {
            element.classList.remove('dark')
        });
    }
}

function themeAnalasys() {
    dark = JSON.parse(localStorage.getItem('@openMusic:theme'))||false
    if (dark) {
        allBlack()
        
    }
    console.log(dark)
    
}
themeAnalasys()



