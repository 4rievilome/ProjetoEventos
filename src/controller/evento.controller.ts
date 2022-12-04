import { Body, Controller, Get, Post } from '@nestjs/common';
import { Evento } from 'types/Evento';
import { EventoService } from '../services/evento.service';

@Controller('eventos')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Get()
  async getAll(): Promise<object> {
    return this.eventoService.getAll();
  }
  @Get('filter:/id')
  async getEvento(id: number): Promise<Evento> {
    return await this.eventoService.getEvento(+id);
  }

  @Post('new')
  async registraEvento(@Body() body: any): Promise<boolean> {
    return await this.eventoService.registraEvento(
      new Evento(
        body.nomeEvento,
        body.horario,
        +body.capacidade,
        body.tema,
        body.palestrantes,
      ),
    );
  }

  @Post()
  async excluiEvento(@Body() body: any): Promise<boolean> {
    return await this.eventoService.excluiEvento(+body?.id);
  }
}
