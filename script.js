let countdownValue = 10; // Start value for the countdown
const timerElement = document.getElementById("timer");
const explosionElement = document.getElementById("explosion");
const robotElement = document.getElementById("robot");

const countdown = setInterval(() => {
    if (countdownValue > 0) {
        countdownValue--;
        timerElement.textContent = countdownValue;
    } else {
        clearInterval(countdown);
        triggerExplosion();
    }
}, 1000);

function triggerExplosion() {
    // Hide the countdown
    timerElement.textContent = '';
    document.querySelector('.countdown').style.display = 'none';

    // Show explosion
    explosionElement.classList.remove('hidden');
    explosionElement.style.animation = 'explode 1s ease-out';

    // After explosion, show robot
    setTimeout(() => {
        explosionElement.style.display = 'none';
        robotElement.classList.remove('hidden');
    }, 1000);
}
