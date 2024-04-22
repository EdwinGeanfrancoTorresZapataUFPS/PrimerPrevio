document.addEventListener("DOMContentLoaded", function() {
    // Obtener el código de estudiante de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const codigoEstudiante = urlParams.get('codigo');

    // Obtener el usuario del localStorage
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    // Mostrar el código y el nombre del usuario en la interfaz de notas
    document.getElementById("codigo").innerText = usuario.codigo;
    document.getElementById("nombre").innerText = usuario.nombre;

    // Aquí se deben realizar las llamadas al endpoint por GET para obtener las notas del usuario
    // Ejemplo ficticio de cómo se podrían mostrar las notas del usuario en la tabla
    const notas = [
        { asignatura: "Calculo 1", cre: 4.5, p1: 3.8, p2: 4.0, p3: 4.2, ef: 4.7, def: 4.3 },
        { asignatura: "Programacion 1", cre: 3.5, p1: 4.0, p2: 3.8, p3: 3.9, ef: 4.5, def: 3.9 },
        { asignatura: "Introduccion a la Ingenieria", cre: 4.0, p1: 3.9, p2: 4.1, p3: 4.3, ef: 4.6, def: 4.2 },
        { asignatura: "Procesos Comunicativos 1", cre: 3.8, p1: 3.5, p2: 3.7, p3: 3.9, ef: 4.0, def: 3.8 },
        { asignatura: "Fisica 1", cre: 4.2, p1: 4.1, p2: 4.3, p3: 4.5, ef: 4.7, def: 4.4 }
    ];

    // Mostrar las notas del usuario en una tabla en la interfaz de notas
    const notasTable = document.getElementById("notasTable");
    const tbody = notasTable.querySelector('tbody');
    notas.forEach(nota => {
        const row = document.createElement("tr");
        Object.values(nota).forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });

    // Manejar el clic del botón de cerrar sesión
    document.getElementById("logoutBtn").addEventListener("click", function() {
        // Borrar los registros del localStorage
        localStorage.removeItem("usuario");
        // Redirigir a la interfaz de login
        window.location.href = "index.html";
    });
});
