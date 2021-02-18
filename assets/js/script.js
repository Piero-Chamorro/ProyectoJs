/*===== PROGRESS BAR =====*/
$(window).scroll(function () {
    var scroll = $(window).scrollTop(),
        dh = $(document).height(),
        wh = $(window).height();
    scrollPercent = (scroll / (dh - wh)) * 100;
    $('#progressbar').css('height', scrollPercent + '%');
});

/*===== COUNTDOWN =====*/
const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
];
const weekdays = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;

//const futureDate = new Date(tempYear, tempMonth, tempDay + 0, 18, 34, 0);

 let futureDate = new Date(2021, 2, 1, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `Podras hacer tus pedidos a partir del ${weekday}, ${date} ${month} del ${year} a las ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();

function getRemaindingTime() {
    const today = new Date().getTime();

    const t = futureTime - today;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values array
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    });

    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<a href="#" class="button">Vamos a ello</a>`;
    }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();

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