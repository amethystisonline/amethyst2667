const introduction = document.querySelector(".introduction");
introduction.addEventListener("pointermove", (event) => {
    const bounds = introduction.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

    introduction.style.setProperty("--tilt-x", `${-vertical * 10}deg`);
    introduction.style.setProperty("--tilt-y", `${horizontal * 10}deg`);
});
introduction.addEventListener("pointerleave", () => {
    introduction.style.removeProperty("--tilt-x");
    introduction.style.removeProperty("--tilt-y");
});