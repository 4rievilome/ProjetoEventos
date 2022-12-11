export class Evento {
  private nomeEvento: string;
  private horario: string;
  private capacidade: number;
  private tema: string;
  private dataEvento: Date;
  constructor(
    nomeEvento: string,
    horario: string,
    capacidade: number,
    tema: string,
    dataEvento: Date,
  ) {
    this.nomeEvento = nomeEvento;
    this.horario = horario;
    this.capacidade = capacidade;
    this.tema = tema;
    this.dataEvento = dataEvento;
  }

  getNomeEvento(): string {
    return this.nomeEvento;
  }

  getHorario(): string {
    return this.horario;
  }

  getCapacidade(): number {
    return this.capacidade;
  }

  getTema(): string {
    return this.tema;
  }

  getDataEvento(): Date {
    return this.dataEvento;
  }

  setNomeEvento(nome: string) {
    this.nomeEvento = nome;
  }

  setHorario(horario: string) {
    this.horario = horario;
  }

  setTema(tema: string) {
    this.tema = tema;
  }

  setDataEvento(data: Date) {
    this.dataEvento = data;
  }
}
