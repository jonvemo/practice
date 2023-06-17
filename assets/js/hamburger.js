const 
    $MAIN = document.getElementById('main'),
    $HEADER = document.getElementById('header'),
    $MENU = document.getElementById('aside'),
    $BTN_MENU = document.getElementById('btn__menu')

export const HAMBURGER = ()=> {
    $MAIN.classList.toggle('active')
    $HEADER.classList.toggle('active')
    $MENU.classList.toggle('active')
    $BTN_MENU.classList.toggle('active')
}
