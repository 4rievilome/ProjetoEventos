const connect = new Connect("localhost:3000");
const contador = 0;
const activeSlider = false;
window.addEventListener('DOMContentLoaded', async i => {
    await connect.request("GET", "eventos/destaque");
    await connect.request("GET", "palestrantes");
    await connect.request("GET", "eventos");
    activeSlider = true;
});