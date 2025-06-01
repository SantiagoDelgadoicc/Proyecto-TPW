fetch('datos.json') // Petición al archivo JSON en la misma carpeta
    .then(response => {
        if (!response.ok) { // Verificamos si hubo un error en la carga
            throw new Error("Error al cargar el archivo JSON");
        }
        return response.json(); // Convertimos la respuesta en un objeto JavaScript
    })
    .then(data => {
        console.log("Datos obtenidos:", data); // Mostramos los datos en consola
    })
    .catch(error => {
        console.error("Error:", error); // Capturamos cualquier error
    });


/*
¿Qué hace cada .then()?
Primer .then(response => response.json()):

    - Recibe la respuesta "cruda" del servidor (objeto Response).
    - Llama a .json() para convertir esa respuesta en un objeto JavaScript (parsear el JSON).
    - Esto también devuelve una promesa, porque leer el cuerpo de la respuesta es asíncrono.

Segundo .then(data => ...):

    - Recibe el objeto JavaScript ya convertido desde el JSON.
    - Aquí puedes usar los datos, mostrarlos, procesarlos, etc.


*/     