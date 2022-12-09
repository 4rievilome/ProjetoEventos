import { Injectable } from '@nestjs/common';
import { Evento } from 'types/Evento';
import { Eventos } from 'utils/models/Evento';

@Injectable()
export class EventoService {
  async getEvento(id: number): Promise<object> {
    try {
      const e = (
        await Eventos.findByPk(id, {
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        })
      ).toJSON();
      return e;
    } catch (error) {
      return { Message: 'Erro ao buscar' };
    }
  }

  async registraEvento(novoEvento: Evento): Promise<boolean> {
    try {
      const obj = await Eventos.create({
        nomeEvento: novoEvento.getNomeEvento(),
        horario: novoEvento.getHorario(),
        capacidadeMax: +novoEvento.getCapacidade(),
        tema: novoEvento.getTema(),
        palestrantes: novoEvento.getPalestrantes(),
      });
      return obj ? true : false;
    } catch (error) {
      console.log(+novoEvento.getCapacidade())
      console.log(error)
      return false;
    }
  }

  async excluiEvento(id: number): Promise<boolean> {
    try {
      const evento = await Eventos.findByPk(id);
      evento.destroy();
      return true;
    } catch (error) {
      return false;
    }
  }

  async getAll(): Promise<object> {
    try {
      const eventos = await Eventos.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      });
      return eventos;
    } catch (error) {
      Message: 'Erro ao buscar';
    }
  }
}
