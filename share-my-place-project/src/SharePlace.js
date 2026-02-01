class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.querySelector('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserBtn);
    addressForm.addEventListener('click', this.findAddressHandler);
  }

  locateUserHandler() { }

  findAddressHandler() { }
}
