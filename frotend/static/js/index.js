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
    dataHandler = new DataHandler(await connect.request({method:"GET", route:"palestrantes", body:{}}), await connect.request({method:"GET", route:"eventos", body:{}}));
    imgSlider.src = imgPath[contador];
    txtSlider.src = titulos[contador];
    activeSlider = true;
});

setInterval( i => {
    contador++;
    setSlide()
}, 1000);
