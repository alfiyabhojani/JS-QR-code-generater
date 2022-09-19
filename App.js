const main = document.querySelector(".main");
qrInput = main.querySelector(".data");
generateBtn = main.querySelector(".submit");
qrImg = main.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return; // if the input is empty then return from here
  generateBtn.innerText = "Generating QR Code....";
  // getting a QR code of user entered value using the qrserver
  // api and passing the api returned img src to qrimg
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    main.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  });
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    main.classList.remove("active");
  }
});
