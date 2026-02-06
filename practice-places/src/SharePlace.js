class Place {
    constructor() {
        const getCurrent = document.getElementById("locate-btn");
        getCurrent.addEventListener('click', this.getCurrentPositionHandler);
    }

    getCurrentPositionHandler() {
        navigator.geolocation.getCurrentPosition(success => {
            console.log(success)
        }, error => {
            console.log(error)
        })
    }
}

class App {
    static main() {
        new Place();
    }
}

App.main();