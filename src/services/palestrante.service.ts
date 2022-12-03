import { Injectable } from '@nestjs/common';
import { Palestrante } from 'types/Palestrante';
import { Palestrantes } from 'utils/models/Palestrante';

@Injectable()
export class PalestranteService {
  async getPalestrante(id: number): Promise<Palestrante> {
    let palestrante: Palestrante;
    try {
      const p = (await Palestrantes.findByPk(id)).toJSON();
      return new Palestrante(
        p.nomePalestrante,
        p.email,
        p.cargo,
        p.instituicao,
      );
    } catch (error) {
      return palestrante;
    }
  }

  async registraPalestrante(novoPalestrante: Palestrante): Promise<boolean> {
    try {
      const p = await Palestrantes.create({
        nomePalestrante: novoPalestrante.getNome(),
        email: novoPalestrante.getEmail(),
        cargo: novoPalestrante.getCargo(),
        instituicao: novoPalestrante.getInstituicao(),
      });
      return p ? true : false;
    } catch (error) {
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
}
