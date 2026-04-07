const textarea = document.getElementById("textarea");
const counter = document.querySelector(".counter");
const progress = document.getElementById("progress");
const bgText = document.getElementById("bgText");

const MAX = 200;

textarea.addEventListener("input", () => {
    let text = textarea.value;
    let length = text.length;

    counter.innerText = length;

    // 🔥 Background text effect
    bgText.innerText = text.slice(-8).toUpperCase();

    // 📊 progress bar
    let percent = (length / MAX) * 100;
    if (percent > 100) percent = 100;

    progress.style.width = percent + "%";
    textarea.addEventListener("input", () => {
    textarea.style.boxShadow = "0 0 15px rgba(0,255,200,0.6)";
    
    setTimeout(() => {
        textarea.style.boxShadow = "0 0 5px rgba(0,255,200,0.2)";
    }, 150);
});
});