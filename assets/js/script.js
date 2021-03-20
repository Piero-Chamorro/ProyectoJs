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

/*==================== PROGRESS BAR ====================*/
$(window).scroll(function () {
    var scroll = $(window).scrollTop(),
        dh = $(document).height(),
        wh = $(window).height();
    scrollPercent = (scroll / (dh - wh)) * 100;
    $('#progressbar').css('height', scrollPercent + '%');
});

/*==================== SHOW NAVBAR ====================*/
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

/*==================== LINK ACTIVATED ==================== */
const linkColor = document.querySelectorAll('.nav__link');

function colorLink() {
    if (linkColor) {
        linkColor.forEach(l => l.classList.remove('activated'));
        this.classList.add('activated');
    }
}
linkColor.forEach(l => l.addEventListener('click', colorLink));


/*====================  DARK THEME  ==================== */
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

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.add('activated');
        } else {
            document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.remove('activated');
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*=============== TYPING ANIMATION ===============*/
$(document).ready(function () {
    // Script de animación de texto
    var typed = new Typed(".typing", {
        strings: ["SONRISAS", "AMOR", "CARIÑO", "ALEGRÍA", "ESPERANZA"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
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
// const futureDate = new Date(tempYear, tempMonth, tempDay + 30, 8, 34, 0);

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
        deadline.innerHTML = `<a href="#shop" class="button">Vamos a ello</a>`;
    }
}
// countdown
let countdown = setInterval(getRemaindingTime, 1000);
// valores iniciales
getRemaindingTime();

/*====================  CONTENFUL  ==================== */
const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "lb4nmupptke2",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "e5o3iVYJPuumztcZMcjvAVHgMZFXF7Wp8alTMgQFZHI"
});


// Variables de producto
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector('.shop__container');

// cart
let cart = [];
// buttons
let buttonsDOM = [];

// Obtenemos los productos
class Products {
    async getProducts() {
        try {
            let contentful = await client.getEntries({
                content_type: "proyectJavaScriptProduct"
            });

            // Otra forma de llamar a los productos
            // let result = await fetch("products.json");
            // let data = await result.json();

            let products = contentful.items;
            products = products.map(item => {
                const { title, section, price } = item.fields;
                const { id } = item.sys;
                const image = item.fields.image.fields.file.url;
                return { title, section, price, id, image }
            })
            return products;
        } catch (error) {
            console.log(error);
        }
    }
}

// Mostrar los productos
class UI {
    displayProducts(products) {
        let result = "";
        products.forEach(product => {
            result += `
            <div class="shop__content">
                    <img src="${product.image}" alt="product" class="shop__img">
                    <h3 class="shop__title">${product.title}</h3>
                    <span class="shop__category">${product.section}</span>
                    <span class="shop__preci">S/ ${product.price}</span>

                    <button class="shop__button bx bx-heart" data-id=${product.id}>
                    </button>
            </div>
            `;
        });
        productsDOM.innerHTML = result;

    }
    getBagButtons(){
        const buttons = [...document.querySelectorAll(".shop__button")];
        buttonsDOM = buttons;
        buttons.forEach(button => {
            let id = button.dataset.id;
            let inCart = cart.find(item => item.id === id);
            if (inCart) {
                button.classList.remove("bx-heart");
                button.classList.add("bxs-heart");
                button.disabled = true;
            }
            button.addEventListener("click", event => {
                event.target.classList.remove("bx-heart");
                event.target.classList.add("bxs-heart");
                event.target.disabled = true;
                // obtenemos product de products
                let cartItem = {...Storage.getProduct(id), amount: 1};
                // agregar productos al carrito
                cart = [...cart, cartItem];
                // guardar el carrito en el local storage
                Storage.saveCart(cart);
                // establecer valores del carrito
                this.setCartValues(cart);
                // mostrar el articulo del carrito
                this.addCartItem(cartItem);
                // mostrar el carrito
                this.showCart();
            });
        });
    }
    setCartValues(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;
        });
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotal;
    }
    addCartItem(item) {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src="${item.image}" alt="product">
            <div>
                <h4>${item.title}</h4>
                <h5>S/.${item.price}</h5>
                <span class="remove-item" data-id=${item.id}>remover</span>
            </div>
            <div>
                <i class="bx bx-chevron-up" data-id=${item.id}></i>
                <p class="item-amount">${item.amount}</p>
                <i class="bx bx-chevron-down" data-id=${item.id}></i>
            </div>`;
        cartContent.appendChild(div);
    }
    showCart() {
        cartOverlay.classList.add("transparentBcg");
        cartDOM.classList.add("showCart");
    }
    setupAPP() {
        cart = Storage.getCart();
        this.setCartValues(cart);
        this.populateCart(cart);
        cartBtn.addEventListener("click", this.showCart);
        closeCartBtn.addEventListener("click", this.hideCart);
    }
    populateCart(cart) {
        cart.forEach(item => this.addCartItem(item));
    }
    hideCart() {
        cartOverlay.classList.remove("transparentBcg");
        cartDOM.classList.remove("showCart");
    }
    cartLogic() {
        // boton limpiar del carrito
        clearCartBtn.addEventListener("click", () =>{
            this.clearCart();
        });
        // funcion del carrito
        cartContent.addEventListener("click", event => {
            if (event.target.classList.contains("remove-item")) {
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                cartContent.removeChild(removeItem.parentElement.parentElement);
                this.removeItem(id);
            } else if (event.target.classList.contains("bx-chevron-up")) {
                let addAmount = event.target;
                let id = addAmount.dataset.id;
                let tempItem = cart.find(item => item.id===id);
                tempItem.amount = tempItem.amount + 1;
                Storage.saveCart(cart);
                this.setCartValues(cart);
                addAmount.nextElementSibling.innerHTML = tempItem.amount;
            }  else if (event.target.classList.contains("bx-chevron-down")) {
                let lowerAmount = event.target;
                let id = lowerAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount - 1;
                // no puede ser negativo
                if (tempItem.amount > 0) {
                    Storage.saveCart(cart);
                    this.setCartValues(cart);
                    lowerAmount.previousElementSibling.innerText = tempItem.amount;
                } else {
                    cartContent.removeChild(lowerAmount.parentElement.parentElement);
                    this.removeItem(id);
                }
            }
        });
    }
    clearCart() {
        let cartItems = cart.map(item => item.id);
        cartItems.forEach(id => this.removeItem(id));
        console.log(cartContent.children);

        while (cartContent.children.length > 0) {
            cartContent.removeChild(cartContent.children[0]);
        }
        this.hideCart();
    }
    removeItem(id) {
        cart = cart.filter(item => item.id !== id);
        this.setCartValues(cart);
        Storage.saveCart(cart);
        let button = this.getSingleButton(id);
        button.disabled = false;
        button.classList.remove("bxs-heart");
        button.classList.add("bx-heart");
    }
    getSingleButton(id) {
        return buttonsDOM.find(button => button.dataset.id === id);
    }
}

// local storage
class Storage {
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
    }
    static getProduct(id) {
        let products = JSON.parse(localStorage.getItem("products"));
        return products.find(product => product.id === id);
    }
    static saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    static getCart() {
        return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    // setup app
    ui.setupAPP();

    //obtenemos todos los productos
    products
        .getProducts()
        .then(products => {
            ui.displayProducts(products);
            Storage.saveProducts(products);
        })
        .then(() => {
            ui.getBagButtons();
            ui.cartLogic();
        });
});

/*====================  ABOUT US  ==================== */
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;

    if (id) {
        // eliminar el seleccionado de otros botones
        btns.forEach(function (btn) {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        // ocultar otros artículos
        articles.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});

/*====================  CLIENTS  ==================== */
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

/*====================  EMAIL JS  ==================== */
// enviar mail
(function () {
    emailjs.init("user_l6FAfXJuzHwTJkHTVTT6O");
})();
const vue = new Vue({
    el: '#app',
    data() {
        return {
            message: ''
        }
    },
    methods: {
        enviar() {
            let data = {
                message: this.message
            };
            emailjs.send("service_2u5omlc", "form-contacto", data)
                .then(function (response) {
                    if (response.text === 'OK') {
                        let timerInterval
                        Swal.fire({
                            title: '¡Mensaje recibido con éxito!',
                            html: 'En breve nos comunicaremos contigo. Gracias por confiar en nosotros.',
                            icon: 'success',
                            timer: 5000,
                            timerProgressBar: true,
                            didOpen: () => {
                                Swal.showLoading()
                                timerInterval = setInterval(() => {
                                    const content = Swal.getContent();
                                    if (content) {
                                        const b = content.querySelector('b');
                                        if (b) {
                                            b.textContent = Swal.getTimerLeft();
                                        }
                                    }
                                }, 100)
                            },
                            willClose: () => {
                                clearInterval(timerInterval)
                            }
                        }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                        }
                        })
                    }
                    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                }, function (err) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ups...',
                        text: 'Ocurrió un problema al enviar el correo',
                    })
                    console.log("FAILED. error=", err);
                });
        }
    }
});


// validar que se envie un mail valido
function validateForm(){
    const form = document.getElementById('form');
    const formi = document.getElementById('app');
    const email = document.getElementById('email').value;
    const invalid = document.querySelector(`#email-invalid .form__input-error`);
    const status = document.getElementById('status-btn');
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        formi.classList.remove('invalid');
        formi.classList.add('valid');
        invalid.classList.remove('form__input-error-active');
        status.disabled = false;
    } else {
        formi.classList.add('invalid');
        formi.classList.remove('valid');
        invalid.classList.add('form__input-error-active');
        status.disabled = true;
    }
    if (email == "") {
        formi.classList.remove('invalid');
        formi.classList.remove('valid');
        invalid.classList.remove('form__input-error-active');
        status.disabled = true;
    }

    form.addEventListener('submit', (e) => {
		e.preventDefault();
		if(email.match(pattern)){
			formi.classList.remove('valid');
            form.reset();
			status.disabled=true;
			setTimeout('document.location.reload()',5000);
		}
	});
}

/*====================  MORE INFO  ==================== */
// categorias
const categories = document.querySelectorAll('#categorias .categoria');
const containerQuestions = document.querySelectorAll('.contenedor-preguntas');
let categoryActive = null;

categories.forEach((category) => {
	category.addEventListener('click', (e) => {
		categories.forEach((element) => {
			element.classList.remove('activa');
		});

		e.currentTarget.classList.toggle('activa');
		categoryActive = category.dataset.categoria;

		// Activamos el contenedor de preguntas que corresponde
		containerQuestions.forEach((conteiner) => {
			if (conteiner.dataset.categoria === categoryActive) {
				conteiner.classList.add('activo');
			} else {
				conteiner.classList.remove('activo');
			}
		});
	});
});

// preguntas
const questions = document.querySelectorAll('.preguntas .contenedor-pregunta');
questions.forEach((question) => {
	question.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('activa');

		const answer = question.querySelector('.respuesta');
		const heightAnswer = answer.scrollHeight;

		if (!answer.style.maxHeight) {
			// Si esta vacio el maxHeight entonces ponemos un valor.
			answer.style.maxHeight = heightAnswer + 'px';
		} else {
			answer.style.maxHeight = null;
		}

		// Reiniciamos las demas preguntas
		questions.forEach((element) => {
			// Solamente queremos ejecutar el codigo para las preguntas que no
			// sean la pregunta a la que le dimos click.
			if (question !== element) {
				element.classList.remove('activa');
				element.querySelector('.respuesta').style.maxHeight = null;
			}
		});
	});
});



