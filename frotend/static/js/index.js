import { Connect } from "./Connect";
import { DataHandler } from "./DataHandle";

const dataHandler = null;
const connect = new Connect("localhost:3000");
const contador = 0;
const activeSlider = false;
const imgSlider = document.getElementById("ImgSlider");
const txtSlider = document.getElementById("TxtSlider");
const imgPath = ["static/img/dragaofoda.png","static","static"]
const titulos = ["EU ODEIO O CARALHO DO FRONT-END", "PASSAGEM DE SLIDE", "OUTRO SLIDE"];
function setSlide(){
    imgSlider.src = imgPath[contador];
    txtSlider.src = imgPath[contador];
}
window.addEventListener('DOMContentLoaded', async i => {
    console.log(await connect.request("GET", "palestrantes"))
    dataHandler = new DataHandler(await connect.request("GET", "palestrantes"), await connect.request("GET", "eventos"));
    imgSlider.src = imgPath[contador];
    txtSlider.src = titulos[contador];
    activeSlider = true;
});

setInterval( i => {
    contador++;
    setSlide()
}, 1000);
