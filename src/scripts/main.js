import dateFormat from 'dateformat';

function main() {

    const baseURL = "https://api.themoviedb.org/3/movie";
    const basePosterURL = "https://image.tmdb.org/t/p/original";

    const getMovie = () => {
        fetch(`${baseURL}/now_playing?api_key=32c6f052e62ed41618bea720235220b2`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderAllMovies(responseJson.results);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            });
    };

    getMovie();

    console.log(basePosterURL)


    const renderAllMovies = (movies) => {
        const listMovieElement = document.querySelector('#listmovie');
        listMovieElement.innerHTML = '';

        movies.forEach(movie => {
            listMovieElement.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body">
                            <img src=${basePosterURL}/${movie.poster_path} class="col-lg-4 col-md-6 col-sm-12" />
                            <h5>${movie.title} - ${movie.vote_average}</h5>
                            
                            <p>Release date: ${dateFormat(movie.release_date, "dddd, mmmm dS, yyyy")}</P>
                            <p>${movie.overview}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    };

    const showResponseMessage = (message = 'Check your internet connection') => {
        alert(message);
    }
}

export default main;