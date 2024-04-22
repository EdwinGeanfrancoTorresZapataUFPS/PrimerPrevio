document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Buscar en el JSON el usuario con el código proporcionado
        const usuario = usuarios.find(user => user.codigo === username);

        if (usuario && password === "1234") {
            // Guardamos el usuario en el localStorage
            localStorage.setItem("usuario", JSON.stringify(usuario));

            // Redireccionamos a la página de notas
            window.location.href = "notas.html";
        } else {
            errorMessage.style.display = "block";
            loginForm.reset();
        }
    });
});
