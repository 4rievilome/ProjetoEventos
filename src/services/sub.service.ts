import { Subscriptions } from 'utils/models/Subscriptions';
import { Sub } from 'types/Sub';
export class SubService {
  async registraSub(novaSub: Sub): Promise<boolean> {
    try {
      const Sub = await Subscriptions.create({
        nomePessoa: novaSub.getNomePessoa(),
        email: novaSub.getEmail(),
      });
      return Sub ? true : false;
    } catch (error) {
      return false;
    }
  }
}
