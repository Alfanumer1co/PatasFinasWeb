document.getElementById('frmRegistro').addEventListener('submit', function(event) {
    event.preventDefault(); // esta cosa para que no se recarge la pagina

    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    const confiContraseña = document.getElementById('confiContra').value;

    if (contraseña !== confiContraseña) {
        alert("Las contraseñas no coinciden");
        return;
    }

    // Objetos 
    const userData = {
        correo: correo,
        contraseña: contraseña
    };

    // Ruta de la API que hice con C# 
    fetch("http://localhost:5276/api/persona", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.ok) {
            return response.json();// si no hay problema
        } else if (response.status === 409) {
            throw new Error(alert("Este correo ya existe"));
        } else {
            throw new Error("Fallo servidor XD");
        }
    })
    .then(data => {
        // notifica que ya se pudo SIUUU !!!
        alert("Listo, ya estas registrado",data);
    })
    .catch(error => {
        console.error('Error al registrar usuario', error);
    });
});

