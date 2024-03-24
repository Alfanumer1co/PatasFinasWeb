//*************
// LOGIN SIUUU

document.getElementById('frmLogin').addEventListener('submit', function(event) {
    event.preventDefault();

    const correo = document.getElementById('correoU').value;
    const contraseña = document.getElementById('contraseñaU').value;

    fetch("http://localhost:5276/api/persona")
    .then(response => response.json())
    .then(data => {
        // recorre la Lesta
        for (let persona of data) {
            // Compara si hay coincidencia
            if (persona.correo === correo && persona.contraseña === contraseña) {
                window.location.href = '../productos.html';//redirigir si funciona
                return; 
            }
        }
        alert("Correo o contraseña invalidos");
    })
    .catch(error => {
        console.error('Error en la optencion de la Lista mano:', error);
        alert("Fallo en el servicio verifica socio");
    });
});