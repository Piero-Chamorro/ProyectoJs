
/*===== LOGIN =====*/
$(document).ready(() => {
    $('.login__registre').on('submit', () => {
        return false;
    });
});
$('.login__registre').keypress((e) => {
    if (e.which === 13) {
        $('.login__registre').submit();
        // Me parecio verlo como parte del desafio pero el resultado no me gusto
        // alert('Se presiono enter');
    }
});

// Validación simple
function validar() {
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;

    if (usuario == "USUARIO1" && password == "CONTRASEÑA1") {
        window.location = "index.html";
    }
}