// Función para consultar mi pais
function getAllRecordsByCountry() {
    fetch('//34.229.60.146/php-intro-connection/getRecordsByCountry.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la red: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            populateTable(data);
        })
        .catch(error => console.error('Error:', error));

}
// Función para consultar los continentes 
function getAllRecordsByContinent() {
    fetch('//34.229.60.146/php-intro-connection/getRecordsByContinent.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la red: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            populateTable(data);
        })
        .catch(error => console.error('Error:', error));

}

// Función para poblar la tabla 
function populateTable(records) {
    const tbody = document.querySelector('#recordsTable tbody');
    tbody.innerHTML = ''; // Limpiar la tabla

    records.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.Code}</td>
            <td>${record.Name}</td>
            <td>${record.Continent}</td>
            <td>${record.Region}</td>
	        <td>${record.SurfaceArea}</td>
            <td>${record.Population}</td>

        `;
        tbody.appendChild(row);
    });
}
