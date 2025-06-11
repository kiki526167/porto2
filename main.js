const now = new Date();

const totalMilliseconds = (
  (1 * 30 * 24 * 60 * 60 * 1000) +   // 1 bulan = 30 hari
  (14 * 24 * 60 * 60 * 1000) +
  (4 * 60 * 60 * 1000) +
  (38 * 60 * 1000)
);

const targetTime = new Date(now.getTime() + totalMilliseconds);

function updateCountdown() {
  const now = new Date();
  const diff = targetTime - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "Waktu Habis!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = String(days).padStart(2, '0');
  document.getElementById("hours").innerText = String(hours).padStart(2, '0');
  document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
  document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();


 document.addEventListener('click', function () {
    const musik = document.getElementById('musik');
    musik.play();
  }, { once: true });
