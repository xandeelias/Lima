window.addEventListener("mousemove", (element) => {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = element.clientX + "px";
    star.style.top = element.clientY + "px";
    star.innerHTML = "&#10022;";

    const xAleatorio = (Math.random() - 0.5) * 50 + "px";
    star.style.setProperty("--xAleatorio", xAleatorio);

    document.body.appendChild(star);

    setTimeout(()=>{
        star.remove();
    }, 800)
})