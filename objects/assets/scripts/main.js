const COUNTER = { id: 0 };

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovie = (filterTitlePattern = null) => {
  const moviesList = document.getElementById("movie-list");

  if (movies.length === 0) {
    moviesList.classList.remove("visible");
    return;
  }

  moviesList.classList.add("visible");
  moviesList.innerHTML = ``;

  const filteredMovies = !filterTitlePattern
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filterTitlePattern));

  // This is how to check an object have specific property or not
  //if (!('info' in movies)) {
  //if (movies.info === undefined) {
  // do something
  //}

  filteredMovies.forEach((movie) => {
    const newElement = document.createElement("li");
    // in this line movie object is responsible for calling the getFormattedTitle function
    let text = movie.getFormattedTitle() + " - ";
    for (const key in movie.info)
      if (key !== "title") text += `${key}: ${movie.info[key]}`;
    newElement.textContent = text;
    moviesList.appendChild(newElement);
  });
};

const addMovieBtnHandler = () => {
  const title = document.getElementById("title").value;
  const extraKey = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  // validation
  if (title.trim() === "" || extraKey.trim() === "" || extraValue.trim() === "")
    return;

  const newMovie = {
    id: ++COUNTER.id,
    info: {
      title,
      [extraKey]: extraValue,
    },
    //getFormattedTitle: function () {
    getFormattedTitle() {
      // `this` keyword is refere to who call this function
      return this.info.title.toUpperCase();
    },
  };

  movies.push(newMovie);
  renderMovie();
};

const searchBtnHandler = () => {
  const filteredTitleInput = document.getElementById("filter-title");
  renderMovie(filteredTitleInput.value);
};

addMovieBtn.addEventListener("click", addMovieBtnHandler);
searchBtn.addEventListener("click", searchBtnHandler);
