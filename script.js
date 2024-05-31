const menu_hamburger = document.getElementById('menu-hamburger')
const mobile_menu = document.getElementById('navigation')
const root = document.querySelector(':root')
const body = document.querySelector('body')
const toggle = document.querySelector('#theme-switch')

function showPopup() {
    document.getElementById('popupOverlay').style.display = 'flex';
    body.style.overflowY = 'hidden'
}

function hidePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
    body.style.overflowY = 'auto'
}

window.addEventListener('load', function () {
    const infoBalloon = document.getElementById('info-balloon');
    infoBalloon.classList.remove('hidden');
    infoBalloon.classList.add('show');

    // Esconde o balão informativo após 5 segundos
    setTimeout(function () {
        infoBalloon.classList.remove('show');
        // Opcional: remove o balão completamente após a transição de opacidade
        setTimeout(function () {
            infoBalloon.classList.add('hidden');
        }, 500); // tempo igual à duração da transição de opacidade
    }, 5000); // tempo em milissegundos
});



toggle.addEventListener('click', () => {
    if (body.dataset.theme === 'light') {
        root.style.setProperty('--bg-color', '#000000')
        root.style.setProperty('--a-color', '#fffafa')
        root.style.setProperty('--p-d-color', '#fffafa')
        root.style.setProperty('--main-collor', '#2b4360')
        root.style.setProperty('--sub-title-color', '#cccccc')
        root.style.setProperty('--title-color', '#cccccc')
        root.style.setProperty('--pop-up-color', '#141414')
        body.dataset.theme = 'dark'
    } else {
        root.style.setProperty('--bg-color', '#ffffff')
        root.style.setProperty('--a-color', '#000000')
        root.style.setProperty('--p-d-color', '#000000')
        root.style.setProperty('--main-collor', '#2994D1')
        root.style.setProperty('--sub-title-color', '#2994D1')
        root.style.setProperty('--title-color', '#2c2c2c')
        root.style.setProperty('--pop-up-color', '#ffffff')
        body.dataset.theme = 'light'
    }
})

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
        menu_hamburger.setAttribute('src', 'imagens/hamburger.svg')
    })
})

