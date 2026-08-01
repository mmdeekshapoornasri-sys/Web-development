
import { API_KEY } from "./config.js";

const movieInput = document.getElementById("movieInput");
const searchBtn = document.getElementById("searchBtn");

const movieCard = document.getElementById("movieCard");
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");

const moviePoster = document.getElementById("moviePoster");
const movieTitle = document.getElementById("movieTitle");
const movieYear = document.getElementById("movieYear");
const movieReleased = document.getElementById("movieReleased");
const movieGenre = document.getElementById("movieGenre");
const movieLanguage = document.getElementById("movieLanguage");
const movieRuntime = document.getElementById("movieRuntime");
const movieRating = document.getElementById("movieRating");
const movieDirector = document.getElementById("movieDirector");
const movieActors = document.getElementById("movieActors");
const moviePlot = document.getElementById("moviePlot");

const BASE_URL = "https://www.omdbapi.com/";

const getMovie = async (movieName) => {

    loading.classList.remove("hidden");
    movieCard.classList.add("hidden");
    errorMessage.classList.add("hidden");

    try {

        const response = await fetch(
            `${BASE_URL}?apikey=${API_KEY}&t=${encodeURIComponent(movieName)}`
        );

        const data = await response.json();

        if (data.Response === "False") {
            throw new Error(data.Error);
        }

        displayMovie(data);

    } catch (error) {

        showError(error.message);

    } finally {

        loading.classList.add("hidden");

    }

};

const displayMovie = (data) => {

    const {
        Poster,
        Title,
        Year,
        Released,
        Genre,
        Language,
        Runtime,
        imdbRating,
        Director,
        Actors,
        Plot
    } = data;

    moviePoster.src =
        Poster !== "N/A"
        ? Poster
        : "https://via.placeholder.com/300x450?text=No+Image";

    moviePoster.alt = Title;

    movieTitle.textContent = Title;
    movieYear.textContent = Year;
    movieReleased.textContent = Released;
    movieGenre.textContent = Genre;
    movieLanguage.textContent = Language;
    movieRuntime.textContent = Runtime;
    movieRating.textContent = imdbRating;
    movieDirector.textContent = Director;
    movieActors.textContent = Actors;
    moviePlot.textContent = Plot;

    movieCard.classList.remove("hidden");

};

const showError = (message) => {

    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");

};


searchBtn.addEventListener("click", () => {

    const movie = movieInput.value.trim();

    if (movie === "") {

        showError("Please enter a movie name.");
        return;

    }

    getMovie(movie);

});


movieInput.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {

        searchBtn.click();

    }

});


window.addEventListener("load", () => {

    getMovie("Inception");

});