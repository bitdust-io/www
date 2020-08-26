class Hackathon {

    countDownDate;
    counterElement;
    interval;

    constructor() {
        this.countDownDate = new Date("Jan 22, 2021 16:00:00").getTime();
    }

    init() {
        this.buildCountdown();
        this.setCounter();
        this.scrollControl();
    }

    setBackgroundPosition() {
        const bg = document.getElementById('bg');
        const bitdust = document.getElementById('bitdust').getBoundingClientRect();
        bg.style.marginTop = '0';
        const position = bitdust.top - window.pageYOffset;
        if (position < -300) {
            bg.style.marginTop = (bitdust.top - window.pageYOffset + 307) / 3 + 'px';
        }
        const value = -1600;
        if (bitdust.top - window.pageYOffset < value) {
            bg.style.marginTop = (value / 4) - 30 + 'px';
        }
    }

    scrollControl() {
        window.addEventListener('scroll', () => {
            this.setBackgroundPosition();
        });
    }

    buildCountdown() {
        this.counterElement = document.getElementById("counter");
        this.interval = setInterval(() => {
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

        const html = `
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
        `;

        this.counterElement.innerHTML = html;
        if (distance < 0) {
            clearInterval(this.interval);
            this.counterElement.innerHTML = "NOW!";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const hackathonApp = new Hackathon();
    hackathonApp.init();
});
