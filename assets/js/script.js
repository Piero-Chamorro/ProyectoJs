/*==================== SCROLLTOP ====================*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    // Queremos que se muestre solo cuando el desplazamiento sea superior a 560
    if (this.scrollY >= 560) {
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollTop);

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
const deadline0 = document.querySelector('.deadline0');
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// Los meses comienzan desde el inidice 0

// Para la prueba
// const futureDate = new Date(tempYear, tempMonth, tempDay + 0, 18, 34, 0);

// Fecha Oficial
let futureDate = new Date(2021, 2, 1, 9, 0, 0);

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
    // valores en milisegundos
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculamos los valores
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // Establecer values array
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
        // Cuando el tiempo termine se habilita un botón
        deadline0.innerHTML = '';
        deadline.innerHTML = `<a href="#" class="button">Vamos a ello</a>`;
    }
}
// countdown
let countdown = setInterval(getRemaindingTime, 1000);
// valores iniciales
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

/*==================== BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // Cuando el desplazamiento sea superior a 200 de altura se le aplicara una clase
    if (this.scrollY >= 200) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

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

$(document).ready(function () {
    // Script de animación de texto
    var typed = new Typed(".typing", {
        strings: ["SONRISAS", "AMOR", "CARIÑO", "ALEGRÍA", "ESPERANZA"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

// datos de las reseñas
const reviews = [{
        id: 1,
        name: "maria herrera",
        grade: "nuevo comprador",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "Muy padres diseños, de buen tamaño y lo mejor llegaron muy pronto. ¡Me encantaron!",
    },
    {
        id: 2,
        name: "carla merino",
        grade: "comprador frecuente",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Comparado con el costo en las tiendas, esta fue una gran compra. Además, nunca pude encontrar este estilo en las tiendas. Compré dos juegos una de figuras y otra de esferas navideñas. Se veían fantásticos en el árbol de mi comedor el año pasado.",
    },
    {
        id: 3,
        name: "guillermo castilla",
        grade: "nuevo comprador",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Exactamente lo que quería. Adornos de plástico de gran apariencia para usar en el exterior de mi casa. Muy feliz.",
    },
    {
        id: 4,
        name: "jose frias",
        grade: "comprador frecuente",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Los compré como regalo y me sorprendió mucho ver cuántos adornos recibí por el precio que pagué. Muy buen precio y los adornos se veían geniales. ¡Mi hermana los amaba!",
    },
];

// seleccionamos items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const grade = document.getElementById("grade");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// item inicial
let currentItem = 0;

// cargamos el item inicial
window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    grade.textContent = item.grade;
    info.textContent = item.text;
});

// se muestra la persona basada en su item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    grade.textContent = item.grade;
    info.textContent = item.text;
}

// mostrar persona siquiente
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// mostrar persona anterior
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// mostrar persona aleatoria
randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});


