fetch('https://24a0dac0-2579-4138-985c-bec2df4bdfcc-00-3unzo70c406dl.riker.replit.dev/login')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al obtener el código del estudiante.');
        }
        return response.json();
    })
    .then(data => {
        var codigoEstudiante = data.codigo;
        // Aquí puedes hacer lo que necesites con el código del estudiante
        console.log('Código del estudiante:', codigoEstudiante);
    })
    .catch(error => console.error('Error:', error));
