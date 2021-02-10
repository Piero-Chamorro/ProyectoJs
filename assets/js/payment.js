// Metodo de pago
const card = document.querySelector('#card'),
    btnOpenForm = document.querySelector('#btn-open-form'),
    form = document.querySelector('#form-card'),
    numberCard = document.querySelector('#card .number'),
    nameCard = document.querySelector('#card .name'),
    logoMarca = document.querySelector('#logo-marca'),
    firm = document.querySelector('#card .firm p'),
    mesExpiration = document.querySelector('#card .month'),
    yearExpiration = document.querySelector('#card .year');
    ccv = document.querySelector('#card .ccv');

// Volteamos la tarjeta para mostrar el frente
const mostrarFrente = () => {
    if (card.classList.contains('active')) {
        card.classList.remove('active');
    }
}

// Rotacion de la tarjeta
card.addEventListener('click', () => {
    card.classList.toggle('active');
});

// Boton de abrir del formulario
btnOpenForm.addEventListener('click', () => {
    btnOpenForm.classList.toggle('active');
    form.classList.toggle('active');
});

// Select del mes generado
for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    form.selectMonth.appendChild(opcion);
}

// Select del año generado
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    form.selectYear.appendChild(opcion);
}

// Input numero de tarjeta
form.inputNumber.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    form.inputNumber.value = valorInput
        // Eliminamos espacios en blanco
        .replace(/\s/g, '')
        // Eliminar las letras
        .replace(/\D/g, '')
        // Ponemos espacio cada cuatro numeros
        .replace(/([0-9]{4})/g, '$1 ')
        // Elimina el ultimo espaciado
        .trim();

    numberCard.textContent = valorInput;

    if (valorInput == '') {
        numberCard.textContent = '#### #### #### ####';

        logoMarca.innerHTML = '';
    }

    if (valorInput[0] == 4) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = '/assets/img/logos/visa.png';
        logoMarca.appendChild(imagen);
    } else if (valorInput[0] == 5) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = '/assets/img/logos/mastercard.png';
        logoMarca.appendChild(imagen);
    }

    mostrarFrente();
});

// Input nombre de tarjeta
form.inputName.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    form.inputName.value = valorInput.replace(/[0-9]/g, '');
    nameCard.textContent = valorInput;
    firm.textContent = valorInput;

    if (valorInput == '') {
        nameCard.textContent = 'Jhon Doe';
    }

    mostrarFrente();
});

// Seleccionar un mes
form.selectMonth.addEventListener('change', (e) => {
    mesExpiration.textContent = e.target.value;
    mostrarFrente();
});

// Seleccionar el Año
form.selectYear.addEventListener('change', (e) => {
	yearExpiration.textContent = e.target.value.slice(2);
	mostrarFrente();
});

// CCV
form.inputCCV.addEventListener('keyup', () => {
    if (!card.classList.contains('active')) {
        card.classList.toggle('active');
    }

    form.inputCCV.value = form.inputCCV.value
        // Eliminar los espacios
        .replace(/\s/g, '')
        // Eliminar las letras
        .replace(/\D/g, '');

    ccv.textContent = form.inputCCV.value;
});
