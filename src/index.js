import "./main.css";

/* Get the documentElement (<html>) to display the page in fullscreen */
const elem = document.documentElement;

// Fullscreen au double clic
document.addEventListener("dblclick", function (e) {
  openFullscreen();
});

document.body.addEventListener("keyup", function (e) {
  const white = document.querySelector("#white");

  // Quitter fullscreen touche 'echap'
  if (e.code == "Escape") {
    closeFullscreen();
  }

  // Start / Stop clignotement
  if (e.code === "Space") {
    if (white.classList.contains("active")) {
      white.classList.remove("active");
    } else {
      white.classList.add("active");
    }
  }

  // Level 0
  if (e.code === "Digit0") {
    white.classList.remove("one");
    white.classList.remove("two");
    white.classList.remove("three");
    white.classList.remove("active");
  }

  // Level 1
  if (e.code === "Digit1") {
    if (!white.classList.contains("one")) {
      white.classList.add("one");
      white.classList.remove("two");
      white.classList.remove("three");
    }
  }

  // Level 2
  if (e.code === "Digit2") {
    if (!white.classList.contains("two")) {
      white.classList.remove("one");
      white.classList.add("two");
      white.classList.remove("three");
    }
  }

  // Level 3
  if (e.code === "Digit3") {
    if (!white.classList.contains("three")) {
      white.classList.remove("one");
      white.classList.remove("two");
      white.classList.add("three");
    }
  }
});

/* --- FUNCTIONS --- */

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (!window.screenTop && !window.screenY) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  }
}

// TODO : au clic sur touche 1, 2 ou 3, changer la vitesse de clignotement.
