const COUNTER = { id: 0 };

const addMovieBtn = document.getElementById("add-movie-btn");
const movies = [];

const renderMovie = () => {
  const moviesList = document.getElementById("movie-list");

  if (movies.length === 0) {
    moviesList.classList.remove("visible");
    return;
  }

  moviesList.classList.add("visible");
  moviesList.innerHTML = ``;

  movies.forEach((movie) => {
    const newElement = document.createElement("li");
    newElement.textContent = movie.info.title;
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
  };

  movies.push(newMovie);
  renderMovie();
};

addMovieBtn.addEventListener("click", addMovieBtnHandler);
