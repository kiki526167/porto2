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

  // animasi masuk page 1 start 
const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const elements = entry.target.querySelectorAll('.animate-up');
                elements.forEach(el => {
                    el.classList.add('show');
                });
                observer.unobserve(entry.target); // hanya sekali jalan
            }
        });
    }, {
        threshold: 0.6
    });

    const hero = document.querySelector('.heropage1');
    if (hero) {
        observer.observe(hero);
    }
  // animasi masuk page 1 end 

  // animasi masuk page2 start
const page2Observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            page2Observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.4
});

const page2Elements = document.querySelectorAll('.page2 .animate');
page2Elements.forEach(el => page2Observer.observe(el));


  // animasi masuk page2 end


  // animasi masuk page3 start 
  const page3Observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('p3-show');
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.p3-animate').forEach(el => page3Observer.observe(el));
  // animasi masuk page3 end 

  // animasi page 4 start
    const page4Observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('p4-show');
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.p4-animate').forEach(el => page4Observer.observe(el));
  // animasi page 4 end


  // animasi page5 start
    const page5Observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('p5-show');
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.p5-animate').forEach(el => page5Observer.observe(el));
  // animasi page5 end

  // animasi masuk pae6
    const page6Observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('p6-show');
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.p6-animate').forEach(el => page6Observer.observe(el));
