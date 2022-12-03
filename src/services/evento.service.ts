import { Injectable } from '@nestjs/common';
import { Evento } from 'types/Evento';
import { Eventos } from 'utils/models/Evento';

@Injectable()
export class EventoService {
  async getEvento(id: number): Promise<Evento> {
    let evento: Evento;
    try {
      const e = (await Eventos.findByPk(id)).toJSON();
      return new Evento(
        e.getNomeEvento(),
        e.getHorario(),
        e.getCapacidade(),
        e.getTema(),
        e.getPalestrantes(),
      );
    } catch (error) {
      return evento;
    }
  }

  async criaEvento(novoEvento: Evento): Promise<boolean> {
    try {
      const obj = await Eventos.create({
        nomeEvento: novoEvento.getNomeEvento(),
        horario: novoEvento.getHorario(),
        capacidadeMax: novoEvento.getCapacidade(),
        tema: novoEvento.getTema(),
        palestrantes: novoEvento.getPalestrantes(),
      });
      return obj ? true : false;
    } catch (error) {
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
}
