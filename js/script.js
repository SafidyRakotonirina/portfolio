const phrases = ["front-end ", "back-end ", "design "];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;

function loop() {
  const anim = document.getElementById("anim");
  anim.innerHTML = currentPhrase.map(letter => `<span class="show">${letter}</span>`).join("");

  if (i < phrases.length) {
    if (!isDeleting && j < phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j > 0) {
      currentPhrase.pop();
      j--;
    }

    // Quand le mot est entièrement écrit
    if (j === phrases[i].length && !isDeleting) {
      // Pause de 2 secondes avant de commencer à effacer
      setTimeout(() => {
        isDeleting = true;
        loop(); // on relance la boucle après la pause
      }, 2000);
      return; // on stoppe ici la boucle en attendant
    }

    // Quand le mot est entièrement effacé
    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }

  const speedUp = Math.random() * (80 - 50) + 10;
  const normalSpeed = Math.random() * (200 - 100) + 50;
  const time = isDeleting ? speedUp : normalSpeed;

  setTimeout(loop, time);
}

loop();



function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

  const dark = document.querySelector(".mode-dark");
const light = document.querySelector(".mode-light");
const body = document.querySelector("body");

dark.addEventListener("click", () => {
  body.classList.add("dark-mode");
});

light.addEventListener("click", () => {
  body.classList.remove("dark-mode");
});
