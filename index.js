


// ----------------------------------------   2   ---------------------->

const number = document.getElementById("number");
const numberBtn = document.getElementById("number-btn");
const numberBtnn = document.getElementById("number-btnn");
const restart = document.getElementById("restart");
const storage = document.getElementById("storage");
const storageThis = document.getElementById("storage-this");
const storageCancel = document.getElementById("cancel");

numberBtn.addEventListener("click", () => {
    number.innerText++;
});

numberBtnn.addEventListener("click", () => {
    number.innerText--;
});

restart.addEventListener("click", () => {

    number.innerText = 0;
});

  // Saqlash tugmasi
  storage.addEventListener("click", () => {
    storageThis.innerText = number.innerText + "   Zikir aytinggiz😊";
});

// // O'chirish tugmasi
storageCancel.addEventListener("click", () => {
    storageThis.innerText = "";
});

