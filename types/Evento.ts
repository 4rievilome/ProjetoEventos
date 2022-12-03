export class Evento {
  private nomeEvento: string;
  private horario: string;
  private capacidade: number;
  private tema: string;
  private palestrantes: string;
  constructor(
    nomeEvento: string,
    horario: string,
    capacidade: number,
    tema: string,
    palestrantes: string,
  ) {
    this.nomeEvento = nomeEvento;
    this.horario = horario;
    this.tema = tema;
    this.palestrantes = palestrantes;
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

  getPalestrantes(): string {
    return this.palestrantes;
  }

  setNomeEvento(nome: string) {
    this.nomeEvento = nome;
  }

  setHorario(horario: string) {
    this.horario = horario;
  }
}
