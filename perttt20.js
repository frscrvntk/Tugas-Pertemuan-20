alert("Welcome to Frisca's Portfolio 💖");

const text = "Hi, I'm Frisca 👋";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 120);
    }
}

window.onload = typeEffect;