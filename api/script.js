document.addEventListener("DOMContentLoaded", () => {
    const movie_name = document.querySelector("#movie-name");
    const movie_year = document.querySelector("#movie-year");
    const movie_page = document.querySelector("#movie-page");
    const search_button = document.querySelector("#search-button");
    const api_key = "5ef0849d";
    let s = "";
    let y = "";
    let p = "";
    let url_endpoint = "";

    function obtenerDatos() {
        try {
            s = movie_name.value;
            y = movie_year.value;
            p = movie_page.value;
            url_endpoint = `http://omdbapi.com/?apikey=5ef0849d&s=${s}&y=${y}&page=${p}`;
        }
        catch (error) {
            console.error('Falló la petición:', error.message);
            throw error;
        };
    };

    async function obtenerPelicula() {
        try {
            const response = await fetch(url_endpoint)
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            else {
                const data = await response.json();
                const movies = data.Search;
                // console.log(data.Search[1].Title)

                document.querySelector("#total-results").textContent = `Resultados totales: ${movies.length}`;

                const billboards = document.getElementById('billboards');
                billboards.innerHTML = movies.map(m =>
                    `<div class="billboard bg-purple br8 of-hidden ">
                    <img src="${m.Poster}" class="b-poster">
                    <div class="b-meta bg-gray flex flex-col align-items-flex-start">
                        <div class="fz16">Titulo: ${m.Title}</div>
                        <div class="fz16">Tipo: ${m.Type}</div>
                        <div class="fz16">Año: ${m.Year}</div>
                    </div>
                </div>
                `).join('');
            }
        }
        catch (error) {
            document.querySelector("#total-results").textContent = `Resultados totales: 0`;
            billboards.innerHTML = "";
            console.error('Falló la petición:', error.message);
            throw error;
        }
    };

    search_button.addEventListener("click", () => {
        obtenerDatos();
        obtenerPelicula();
    });
});
