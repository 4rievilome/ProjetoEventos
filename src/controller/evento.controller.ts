import { Controller, Get, Post } from '@nestjs/common';
import { Evento } from 'types/Evento';
import { EventoService } from '../services/evento.service';

@Controller()
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Get()
  async getEvento(id: number): Promise<Evento> {
    return await this.eventoService.getEvento(id);
  }

  @Post()
  async registraEvento(novoEvento: Evento): Promise<boolean> {
    return await this.eventoService.registraEvento(novoEvento);
  }

  @Post()
  async excluiEvento(id: number): Promise<boolean> {
    return await this.eventoService.excluiEvento(id);
  }
}
