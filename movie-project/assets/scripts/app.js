// Movie db
// that contains list of movie object
// { title, imageUrl, rating }
const movies = [];

// static ID counter
const ID = { number: 0 };

// connect to add movie button on header
const addMovieButton = document.querySelector("header button");
// connect to hidden modal for adding new movie
const addMovieModal = document.getElementById("add-modal");
// connect to all inputs in addMovieModal
const userInputs = addMovieModal.querySelectorAll("input");
// connet to cancel button in addMovieModal
const cancelAddMovieModal =
  addMovieModal.querySelector(".modal__actions").firstElementChild;
// connect to add button in addMovieModal
const acceptAddMovieModal = cancelAddMovieModal.nextElementSibling;
// connect to the backdrop
const backdrop = document.getElementById("backdrop");
// connect to entryText
const entryText = document.getElementById("entry-text");
// connect to ul of movies
const movieList = document.getElementById("movie-list");

// function for updating display entryText
const updateUI = () => {
  if (movies.length === 0) entryText.style.display = "block";
  else entryText.style.display = "none";
};

// function for after click on movie item then delete the movie item
const deleteMovieItemHandler = (movieItem, id) => {
  const indexOfClickedItem = movies.findIndex(
    ({ id: movieId }) => movieId === id,
  );
  if (indexOfClickedItem !== -1) movies.splice(indexOfClickedItem, 1);
  movieList.removeChild(movieItem);
  updateUI();
};

// function for add new movie item in list
const addNewMovieItem = (id, title, imageUrl, rating) => {
  const newItem = document.createElement("li");
  newItem.classList.add("movie-element");
  newItem.innerHTML = `
          <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}" />
          </div>
          <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 starts</p>
          </div> `;
  newItem.addEventListener(
    "click",
    deleteMovieItemHandler.bind(this, newItem, id),
  );
  movieList.append(newItem);
};

// function for visible backdrop and addMovieModal
const toggleAddMovieModal = () => {
  // toggle the hidden modal for adding new movie
  // also show the backdrop
  addMovieModal.classList.toggle("visible");
  backdrop.classList.toggle("visible");
  clearUserInputAddMovieModal();
  updateUI();
};

// function for deleting value of each user input in addMovieModal
const clearUserInputAddMovieModal = () => {
  for (const userInput of userInputs) userInput.value = "";
};

// function for handling userinputs data for adding
// new movie detail
const addNewMovieHandler = () => {
  const title = userInputs[0].value;
  const imageUrl = userInputs[1].value;
  const rating = userInputs[2].value;

  // validation
  if (
    title.trim() === "" ||
    imageUrl.trim() === "" ||
    rating.trim() === "" ||
    +rating < 1 ||
    +rating > 5
  ) {
    alert("Invalid input data. (rating must be between 1 and 5).");
    return;
  }

  const newMovie = {
    id: ++ID.number,
    title,
    imageUrl,
    rating,
  };

  movies.push(newMovie);
  addNewMovieItem(newMovie.id, title, imageUrl, rating);
  toggleAddMovieModal();
};

// Add event listener for clicking addMovieButton
addMovieButton.addEventListener("click", toggleAddMovieModal);

// add event listener for clicking add button in addMovieModal
acceptAddMovieModal.addEventListener("click", addNewMovieHandler);
// create a listner for 'Enter Key' in keyboard for add new item movie
addMovieModal.addEventListener("keydown", (event) => {
  if (addMovieModal.classList.contains("visible"))
    if (event.key === "Enter") addNewMovieHandler();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Dead") {
    toggleAddMovieModal();
  }
});

// add event listner for clicking cancel button of addMovieModal
cancelAddMovieModal.addEventListener("click", toggleAddMovieModal);

// Add event listner for clicking backdrop
backdrop.addEventListener("click", toggleAddMovieModal);
