import Modal from "./UI/Modal";

class PlaceFinder {
    constructor() {
        const addressForm = document.querySelector("form");
        const getCurrent = document.getElementById("locate-btn");

        getCurrent.addEventListener('click', this.locateUserHandler);
    }

    locateUserHandler() {
        const modal = new Modal('loading-modal-content');
        modal.show();
        navigator.geolocation.getCurrentPosition(success => {
            const coordinates = {
                lat: success.coords.latitude,
                lng: success.coords.longitude,
            }
            console.log(coordinates)
        }, error => {
            console.log(error)
        })
    }

    findAddressHandler() {

    }
}

class App {
    static main() {
        new PlaceFinder();
    }
}

App.main();