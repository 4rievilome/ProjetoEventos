export class Sub {
  private nomePessoa: string;
  private email: string;
  private eventoID: number;
  constructor(nomePessoa: string, email: string, eventoId: number) {
    this.nomePessoa = nomePessoa;
    this.email = email;
    this.eventoID = eventoId;
  }

  getNomePessoa(): string {
    return this.nomePessoa;
  }

  getEmail(): string {
    return this.email;
  }

  getEventoId(): number {
    return this.eventoID;
  }
}
