
mensajeDiv = document.getElementById("mensaje");
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    var data = {
        "username": username,
        "password": password
    };
    
    fetch('https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Guardar el usuario en el localStorage
        localStorage.setItem('user', JSON.stringify(data));
        // Redirigir a otra página o realizar otras acciones según sea necesario
        window.location.href = 'notas.html'; // Cambiar 'otra_pagina.html' por la página que desees redirigir
    })
    .catch((error) => {
        console.error('Error:', error);
        mensajeDiv.innerHTML = "Credenciales no validas";
    });
});