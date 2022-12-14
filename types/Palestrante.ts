export class Palestrante {
  private nomePalestrante: string;
  private email: string;
  private cargo: string;
  private instituicao: string;
  private eventoID: number;
  constructor(
    nomePalestrante: string,
    email: string,
    cargo: string,
    instituicao: string,
    eventoID: number,
  ) {
    this.nomePalestrante = nomePalestrante;
    this.email = email;
    this.cargo = cargo;
    this.instituicao = instituicao;
    this.eventoID = eventoID;
  }

  getNome(): string {
    return this.nomePalestrante;
  }

  getEmail(): string {
    return this.email;
  }

  getCargo(): string {
    return this.cargo;
  }

  getInstituicao(): string {
    return this.instituicao;
  }

  getEventoId(): number {
    return this.eventoID;
  }

  setNome(nome: string): void {
    this.nomePalestrante = nome;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  setCargo(cargo: string): void {
    this.cargo = cargo;
  }

  setInstituicao(instituicao: string): void {
    this.instituicao = instituicao;
  }
}
