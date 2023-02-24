const colors = [
    "#BF3325",
    "#CAD5E2",
    "#E03B8B",
    "#FF6666",
    "#03C6C7",
    "#00D84A",
    "#38CC77",
    "#02B290",
    "#B9345A",
    "#CAD5E2",
    "#F4BE2C",
    "#8D3DAF",
];

const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.top = `${e.clientY - 40}px`;
    circle.style.left = `${e.clientX - 40}px`;
    circle.style.backgroundColor = `${colors[Math.floor(Math.random() * 12)]}`;
    container.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 2000);
});