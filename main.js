const input = document.getElementById("user-input");
const infoWrp = document.getElementById("info-wrp");
const outputWrp = document.getElementById("output-wrp");
const outputWrpScreen = document.getElementById("output-wrp-screen");
const btnWrp = document.getElementById("btn-wrp");

input.addEventListener("input", () => {
  infoWrp.style.opacity = "0.6";
  if (input.value === "") {
    infoWrp.style.opacity = "1";
  }
});

updtOutputWrpBottom();
insertLargeScreenContent();

// encryption logic on click event
const encryptBtn = document.getElementById("encrypt-btn");
encryptBtn.addEventListener("click", () => {
  updtOutputWrpBottom();
});

// decryption logic on click event
const decryptBtn = document.getElementById("decrypt-btn");
decryptBtn.addEventListener("click", () => {
  updtOutputWrpBottom();
});

// change outputWrp position based on sceen width
function updtOutputWrpBottom() {
  if (!screen.availWidth > 1440) {
    btnWrp.style.bottom = `${outputWrp.clientHeight + 60}px`;
  } else {
    btnWrp.style.top = `${screen.availHeight - btnWrp.clientHeight - 50}px`;
  }
}

window.addEventListener("resize", () => {
  insertLargeScreenContent();
});

function insertLargeScreenContent() {
  if (screen.availWidth >= 1440) {
    const image = `<img src="./assets/guy-illustration.svg" alt="Ilustração de um menino com segurando uma lupa" />`;
    const currentContent = outputWrpScreen.innerHTML;

    outputWrpScreen.innerHTML = `${image}${currentContent}`;
  }
}

// encryption logic
