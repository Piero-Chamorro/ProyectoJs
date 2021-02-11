/*===== LOGIN =====*/
function validar() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    if (usuario == "USUARIO1" && password == "CONTRASEÑA1") {
        window.location = "index.html";
    }
}

/*===== MOSTRAR NAVBAR  =====*/
const showNavBar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId)

    // Validamos que las variables existan
    if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
            // mostrar navbar
            nav.classList.toggle('show');
            // se cambia el icono
            toggle.classList.toggle('bx-x');
            // añadimos padding al body
            bodypd.classList.toggle('body-pd');
            // añadimos padding al header
            headerpd.classList.toggle('body-pd');
        });
    }
}

showNavBar('header-toggle', 'nav-bar', 'body-pd', 'header');

/*===== LINK ACTIVATED  =====*/
const linkColor = document.querySelectorAll('.nav__link');

function colorLink() {
    if (linkColor) {
        linkColor.forEach(l => l.classList.remove('activated'));
        this.classList.add('activated');
    }
}
linkColor.forEach(l => l.addEventListener('click', colorLink));


/*===== DARK THEME  =====*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bxs-moon';

// Tema seleccionado en caso se haya seleccionado antes
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Se obtiene el tema actual validando la clase 'dark-theme'
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-sun' : 'bxs-moon';

// Validamos sí el usuario ha escogido un tema antes
if (selectedTheme) {
    //Sí se cumple la validacion, comprobamos sí activamos o desactivamos la oscuridad
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-sun' ? 'add' : 'remove'](iconTheme);
}

// Activamos o desactivamos el tema oscuro con el boton
themeButton.addEventListener('click', () => {
    // Activar o desactivar el modo oscuro / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // Guardamos el tema y el icono elegido
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});