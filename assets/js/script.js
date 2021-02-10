// Tema Oscuro
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-moon'

// Tema seleccionado en caso se haya seleccionado antes
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Se obtiene el tema actual validando la clase 'dark-theme'
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-sun' : 'bxs-moon'

// Validamos sí el usuario ha escogido un tema antes
if (selectedTheme) {
    //Sí se cumple la validacion, comprobamos sí activamos o desactivamos la oscuridad
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bxs-sun' ? 'add' : 'remove'](iconTheme)
}

// Activamos o desactivamos el tema oscuro con el boton
themeButton.addEventListener('click', () => {
    // Activar o desactivar el modo oscuro / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Guardamos el tema y el icono elegido
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
