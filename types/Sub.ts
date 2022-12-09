export class Sub {
  private nomePessoa: string;
  private email: string;
  constructor(nomePessoa: string, email: string) {
    this.nomePessoa = nomePessoa;
    this.email = email;
  }

  getNomePessoa() {
    return this.nomePessoa;
  }

  getEmail() {
    return this.email;
  }
}
