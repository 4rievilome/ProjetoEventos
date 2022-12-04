import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Evento } from 'types/Evento';
import { EventoService } from '../services/evento.service';

@Controller('eventos')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Get()
  async getAll(): Promise<object> {
    return this.eventoService.getAll();
  }
  @Get('filter/:id')
  async getEvento(@Param('id') id: number): Promise<object> {
    const retorno = await this.eventoService.getEvento(+id);
    return Object.keys(retorno).length === 0
      ? { Message: 'Não foi encontrado com esse ID' }
      : retorno;
  }

  @Post('new')
  async registraEvento(@Body() body: any): Promise<object> {
    return (await this.eventoService.registraEvento(
      new Evento(
        body.nomeEvento,
        body.horario,
        +body.capacidade,
        body.tema,
        body.palestrantes,
      ),
    ))
      ? { Message: 'Criado com sucesso' }
      : { Message: 'Falha ao criar!' };
  }

  @Post('remove')
  async excluiEvento(@Body() body: any): Promise<object> {
    return (await this.eventoService.excluiEvento(+body?.id))
      ? { Message: 'Excluido com sucesso' }
      : { Message: 'Falha ao excluir!' };
  }
}
