const input = document.getElementById("user-input");
const btnWrp = document.getElementById("btn-wrp");
const outputWrp = document.getElementById("output-wrp");
const outputReplaceable = document.getElementById("output-replaceable");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copy-btn");

// encryption logic on click event
document.getElementById("encrypt-btn").addEventListener("click", () => {
  if (input.value != "") {
    insertResultingContent(
      input.value
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat")
    );
  }
});

// decryption logic on click event
document.getElementById("decrypt-btn").addEventListener("click", () => {
  if (input.value != "") {
    insertResultingContent(
      input.value
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u")
    );
  }
});

function insertResultingContent(convertedTxt) {
  outputReplaceable.innerHTML = "";
  output.innerHTML = convertedTxt;
  copyBtn.style.display = "block";
}

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.textContent);

  // change colors for copy button, end then back to the original color
  const btnColors = {
    text: window.getComputedStyle(copyBtn).color,
    border: window.getComputedStyle(copyBtn).border,
  };

  copyBtn.innerText = "Copiado!";
  copyBtn.style.color = "green";
  copyBtn.style.border = "1px solid green";

  setTimeout(() => {
    copyBtn.innerText = "Copiar";
    copyBtn.style.color = btnColors.text;
    copyBtn.style.border = btnColors.border;
  }, 1500);
});

// change outputWrp position based on sceen width
// function updtOutputWrpBottom() {
//   if (!screen.availWidth > 1440) {
//     btnWrp.style.bottom = `${outputWrp.clientHeight + 60}px`;
//   } else {
//     btnWrp.style.top = `${screen.availHeight - btnWrp.clientHeight - 50}px`;
//   }
// }

// window.addEventListener("resize", () => {
//   insertLargeScreenContent();
// });

// function insertLargeScreenContent() {
//   if (screen.availWidth >= 1440) {
//     const image = `<img src="./assets/guy-illustration.svg" alt="Ilustração de um menino com segurando uma lupa" />`;
//     const currentContent = outputWrpScreen.innerHTML;

//     outputWrpScreen.innerHTML = `${image}${currentContent}`;
//   }
// }
