import { Injectable } from '@nestjs/common';
import { Palestrante } from 'types/Palestrante';
import { Palestrantes } from 'utils/models/Palestrante';

@Injectable()
export class PalestranteService {
  async getPalestrante(id: number): Promise<object> {
    try {
      const p = (
        await Palestrantes.findByPk(id, {
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        })
      ).toJSON();
      return p;
    } catch (error) {
      return { Message: 'Não foi possivel encontrar palestrante' };
    }
  }

  async registraPalestrante(novoPalestrante: Palestrante): Promise<boolean> {
    try {
      const p = await Palestrantes.create({
        nomePalestrante: novoPalestrante.getNome(),
        email: novoPalestrante.getEmail(),
        cargo: novoPalestrante.getCargo(),
        instituicao: novoPalestrante.getInstituicao(),
        eventoID: novoPalestrante.getEventoId(),
      });
      return p ? true : false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async excluiPalestrante(id: number): Promise<boolean> {
    try {
      const p = await Palestrantes.findByPk(id);
      p.destroy();
      return true;
    } catch (error) {
      return false;
    }
  }

  async getAll(): Promise<object> {
    try {
      const all = await Palestrantes.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      });
      return all;
    } catch (error) {
      return { Message: 'Erro ao buscar' };
    }
  }
}
