import './main.css';

/* Get the documentElement (<html>) to display the page in fullscreen */
const elem = document.documentElement;

// Fullscreen au double clic
document.addEventListener("dblclick", function (e) {
  openFullscreen();
});

// Quitter fullscreen touche 'echap'
document.body.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    closeFullscreen();
  }
});

// Start / Stop clignotement
document.body.addEventListener("keydown", function (e) {
  if (e.which == 32) {
    const white = document.querySelector("#white");

    if (white.classList.contains("active")) {
      white.classList.remove("active");
    } else {
      white.classList.add("active");
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
