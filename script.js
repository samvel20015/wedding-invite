const guestEl = document.getElementById("guestName");
if (guestEl) {
    guestEl.innerText = getRandomName();
}

// =======================
// ⏳ COUNTDOWN FIX
// =======================
const countdownEl = document.getElementById("countdown");

// Ապրիլի 26, 2026 (ճիշտ տարբերակ)
const targetDate = new Date(2026, 3, 26, 0, 0, 0).getTime();

setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    countdownEl.innerHTML = "Հարսանիքը սկսվեց 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML =
    days + " օր " +
    hours + " ժամ " +
    minutes + " րոպե " +
    seconds + " վայրկյան";
}, 1000);

// =======================
// ✨ SHOW DETAILS FIX
// =======================
function showDetails() {
    const details = document.getElementById("details");

    if (details) {
        details.classList.toggle("show");
    }
}