const menu_hamburger = document.getElementById('menu-hamburger')
const mobile_menu = document.getElementById('navigation')

menu_hamburger.addEventListener('click', () => {
    if (menu_hamburger.classList.contains('hamburger')) {
        menu_hamburger.classList.remove('hamburger')
        menu_hamburger.classList.add('x')
        menu_hamburger.setAttribute('src', 'imagens/x.svg')
        mobile_menu.setAttribute('style', 'top: 10vh');

    }
    else {
        menu_hamburger.classList.remove('x')
        menu_hamburger.classList.add('hamburger')
        menu_hamburger.setAttribute('src', 'imagens/hamburger.svg')
        mobile_menu.setAttribute('style', 'top: -1000%');
    }
})

document.querySelectorAll('#navigation a').forEach(n => {
    n.addEventListener('click', () => {
        mobile_menu.setAttribute('style', 'top: -1000%');
        menu_hamburger.classList.remove('x')
        menu_hamburger.classList.add('hamburger')
        menu_hamburger.setAttribute('src', 'assets/hamburger-f6f90966.svg')
    })
})