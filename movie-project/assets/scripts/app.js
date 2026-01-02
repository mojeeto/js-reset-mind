// Movie db
// that contains list of movie object
// { title, imageUrl, rating }
const movies = [];

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

// function for visible backdrop and addMovieModal
const toggleAddMovieModal = () => {
  // toggle the hidden modal for adding new movie
  // also show the backdrop
  addMovieModal.classList.toggle("visible");
  backdrop.classList.toggle("visible");
  clearUserInputAddMovieModal();
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
    title,
    imageUrl,
    rating,
  };

  movies.push(newMovie);
  console.log(movies); // TODO::DELETE THIS LINE
  toggleAddMovieModal();
};

// Add event listener for clicking addMovieButton
addMovieButton.addEventListener("click", toggleAddMovieModal);

// add event listener for clicking add button in addMovieModal
acceptAddMovieModal.addEventListener("click", addNewMovieHandler);

// add event listner for clicking cancel button of addMovieModal
cancelAddMovieModal.addEventListener("click", toggleAddMovieModal);

// Add event listner for clicking backdrop
backdrop.addEventListener("click", toggleAddMovieModal);
