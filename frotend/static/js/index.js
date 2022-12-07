class DataHandler{
    eventos;
    palestrantes;
    eventosDestaque;
    constructor(eventos,palestrantes){
        this.eventos = eventos;
        this.palestrantes = palestrantes;
    }
}

class Connect{
    serverAdd ;
    constructor(serverAdd){
        this.serverAdd = serverAdd
    }

    async postRequest(route, body){
        const config = {
            method:"POST",
            body: JSON.stringify(body),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }
        const URL = `${this.serverAdd}/${route}`
        const response = await fetch(URL,config);
        if(!response.ok) return {MSG:"Fetch error"}
        return await response.json();
    }

    async getRequest(route){
        const config = {method: "GET"}
        const URL = `${this.serverAdd}/${route}`
        const response = await fetch(URL,config);
        if(!response.ok) return {MSG:"Fetch error"};
        console.log(response.json())
        return await response.json();
    }

    async request({method,route, body}){
        return method === "GET" ? await this.getRequest(route) : await this.postRequest(route,body);
    }
}

const dataHandler = null;
const connect = new Connect("http://127.0.0.1:3000");
let contador = 0;
const activeSlider = false;
let imgSlider = null;
let txtSlider = null;
let bullets = null;
const imgPath = ["static/img/dragaofodao.png","static/img/e1.webp","static/img/BGS.jpeg"]
const titulos = ["EU ODEIO O CARALHO DO FRONT-END", "PASSAGEM DE SLIDE", "OUTRO SLIDE"];
function setSlide(){
    imgSlider.src = imgPath[contador];
    txtSlider.innerText = titulos[contador];
}

window.addEventListener('DOMContentLoaded', async i => {
    imgSlider = document.getElementById("ImgSlider");
    txtSlider = document.getElementById("TxtSlider");
    bullets = document.getElementsByClassName("sliderCounter");
    dataHandler = new DataHandler(await connect.request({method:"GET", route:"palestrantes", body:{}}), await connect.request({method:"GET", route:"eventos", body:{}}));
    imgSlider.src = imgPath[contador];
    txtSlider.innerText  = titulos[contador];
    activeSlider = true;
});

window.addEventListener("click", i =>{
    const element = i.target;
    if(element.className === "sliderCounter") {
        for(e of bullets){
            e.style.backgroundColor = "transparent"
        }
        element.style.backgroundColor = "white"
    }
})

setInterval( i => {
    contador < 2 ? contador++ : contador=0;
    setSlide()
}, 2500);