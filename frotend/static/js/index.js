class DataHandler {
  eventos;
  palestrantes;
  itens;
  constructor(eventos, palestrantes, itens) {
    this.eventos = eventos;
    this.palestrantes = palestrantes;
    this.itens = itens;
  }

  getEventos(){
    return this.eventos;
  }

  getPalestrantes(){
    return this.palestrantes;
  }

  getItens(){
    return this.itens;
  }

  setEventos(eventos){
    this.eventos = eventos
  }

  setPalestrantes(palestrantes){
    this.palestrantes = palestrantes
  }

  setItens(itens){
    this.itens = itens;
  }

  numEventos(){
    return this.eventos.length
  }

  numPalestrantes(){
    return this.palestrantes.length
  }

  numItens(){
    return this.itens.length
  }
  
  precoTotal(listaItens){
    let valorTotal = 0;
    for(item of listaItens){
      valorTotal+=item?.preco;
    }
    return valorTotal;
  }
}

class Connect {
  serverAdd;
  constructor(serverAdd) {
    this.serverAdd = serverAdd;
  }

  async postRequest(route, body) {
    const config = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    };
    const URL = `${this.serverAdd}/${route}`;
    const response = await fetch(URL, config);
    if (!response.ok) return { MSG: 'Fetch error' };
    return await response.json();
  }

  async getRequest(route) {
    const config = { method: 'GET' };
    const URL = `${this.serverAdd}/${route}`;
    const response = await fetch(URL, config);
    if (!response.ok) return { MSG: 'Fetch error' };
    return await response.json();
  }

  async request({ method, route, body }) {
    return method === 'GET'
      ? await this.getRequest(route)
      : await this.postRequest(route, body);
  }
}

class SistemaEvento{
  contador = 0;
  imgPath = [
    'static/img/dragao.png',
    'static/img/e1.webp',
    'static/img/BGS.jpeg',
  ];
  titulos = [
    'OFICINA DE CRIAÇÃO DE GAMES',
    'PALESTRA SOBRE IOT',
    'BAIANINHO DE MAUÁ ARRASANDO',
  ];

  imgSlider = null;
  txtSlider = null;
  bullets = null;
  dataHandler = null;
  connect = null;
  constructor(dataHandler, connect, imgSlider, txtSlider, bullets){
    this.dataHandler = dataHandler;
    this.connect = connect;
    this.imgSlider = imgSlider;
    this.imgSlider.src = this.imgPath[this.contador];
    this.txtSlider = txtSlider;
    this.txtSlider.innerText = this.titulos[this.contador];
    this.bullets = bullets;
  };

  mudaPosicao(){
    for( let e of this.bullets){
      e.style.backgroundColor = 'transparent';
    }
    this.bullets[this.contador].style.backgroundColor = 'white';
  }

  mudaSlide(){
    this.imgSlider.src = this.imgPath[this.contador];
    this.txtSlider.innerText = this.titulos[this.contador];
    this.mudaPosicao();
  }

  incrementaContador(){
    this.contador+=1;
  }

  getContador(){
    return this.contador;
  }
  setContador(id){
    this.contador = id;
  }
}

const connect = new Connect('http://127.0.0.1:3000');
let sisEvento = null;

window.addEventListener('DOMContentLoaded', async () => {
  let dataHandler
  try{
    dataHandler = new DataHandler(
      await connect.request({ method: 'GET', route: 'palestrantes', body: {} }),
      await connect.request({ method: 'GET', route: 'eventos', body: {} }),
    );
  }catch(e){
    console.error("Error %e", e)
  }
  
  try{
    sisEvento = new SistemaEvento(dataHandler, 
      connect,
      document.getElementById('ImgSlider'), 
      document.getElementById('TxtSlider'), 
      document.getElementsByClassName('sliderCounter') 
    )
  }catch(e){
    console.error("error #%e", e)
  }

});

function getClick(id){
    sisEvento.setContador(id);
    sisEvento.mudaSlide()
}

setInterval(() => {
  if(sisEvento){
    sisEvento.getContador() < 2 ? sisEvento.incrementaContador() : sisEvento.setContador(0);
    sisEvento.mudaSlide();
  }
}, 2500);
