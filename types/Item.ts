export class Item {
  private nomeItem: string;
  private precoItem: number;
  constructor(nomeItem: string, precoItem: number) {
    this.nomeItem = nomeItem;
    this.precoItem = precoItem;
  }
  getPreco(): number {
    return this.precoItem;
  }
  getNomeItem(): string {
    return this.nomeItem;
  }
  setPrecoItem(novoPreco: number): void {
    this.precoItem = novoPreco;
  }
  setNome(novoNome: string): void {
    this.nomeItem = novoNome;
  }
}
