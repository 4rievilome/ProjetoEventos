export interface ControllerInterface {
  getAll(): Promise<object>;
  getOne(id: number): Promise<object>;
  registra(body: any): Promise<object>;
  exclui(body: any): Promise<object>;
}
