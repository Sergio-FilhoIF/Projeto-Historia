const btnMenu = document.querySelector('.div-button');
const navbar = document.querySelector('.container-header-navbar-mobile')
const closeOrOpen = document.querySelector('.material-symbols-outlined')

function clickMenu() {
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active')
        closeOrOpen.innerHTML = 'menu'

    }else{
        navbar.classList.add('active')
        closeOrOpen.innerHTML = 'close'
    }
}

function toggleMenuItens(){
    let menuItens = document.querySelector('.menu-items-list');

    menuItens.classList.toggle('active');
}


console.log(navbar);