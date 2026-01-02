// connect to add movie button on header
const addMovieButton = document.querySelector("header button");
// connect to hidden modal for adding new movie
const addMovieModal = document.getElementById("add-modal");
// connet to cancel button in addMovieModal
const cancelAddMovieModal =
  addMovieModal.querySelector(".modal__actions").firstElementChild;
// connect to the backdrop
const backdrop = document.getElementById("backdrop");

// function for visible backdrop and addMovieModal
const toggleAddMovieModal = () => {
  // toggle the hidden modal for adding new movie
  // also show the backdrop
  addMovieModal.classList.toggle("visible");
  backdrop.classList.toggle("visible");
};

// Add event listener for clicking addMovieButton
addMovieButton.addEventListener("click", toggleAddMovieModal);

// add event listner for clicking cancel button of addMovieModal
cancelAddMovieModal.addEventListener("click", toggleAddMovieModal);

// Add event listner for clicking backdrop
backdrop.addEventListener("click", toggleAddMovieModal);
