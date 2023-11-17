document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = 'https://cat-fact.herokuapp.com/facts/random';
    const catFactElement = document.getElementById('catFact');
    const fetchCatFactButton = document.getElementById('fetchCatFact');

    // Función para obtener y mostrar un hecho sobre gatos
    function getCatFact() {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error de red - Código ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Mostrar el hecho sobre gatos en el elemento HTML
                catFactElement.textContent = 'Hecho sobre gatos: ' + data.text;
            })
            .catch(error => {
                console.error('Error al obtener el hecho sobre gatos:', error);
            });
    }

    // Asignar la función getCatFact al evento click del botón
    fetchCatFactButton.addEventListener('click', getCatFact);
});
