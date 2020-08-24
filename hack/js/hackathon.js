class Hackathon {

    countDownDate;

    constructor() {
        this.countDownDate = new Date("Jan 22, 2021 16:00:00").getTime();
    }

    init() {
        this.buildCountdown();
        this.setCounter();
    }

    buildCountdown() {
        setInterval(() => {
            this.setCounter();
        }, 1000);
    }

    setCounter() {
        let now = new Date().getTime();

        let distance = this.countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const innerHtml = `
        <div>
            <div>
                <span>${days}</span>
                <span>days</span>
            </div>
            <div>
                <span>${hours}</span>
                <span>hours</span>
            </div>
            <div>
                <span>${minutes}</span>
                <span>minutes</span>
            </div>
            <div>
                <span>${seconds}</span>
                <span>seconds</span>
            </div>
        </div>
        `;
        document.getElementById("counter").innerHTML = innerHtml;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const hackathonApp = new Hackathon();
    hackathonApp.init();
});
