import { Body, Controller, Get, Param } from '@nestjs/common';
import { EventoService } from 'src/services/evento.service';
import { Evento } from 'types/Evento';
import { ControllerInterface } from './ControllerInterface';

@Controller('eventos')
export class EventoController implements ControllerInterface {
  constructor(private readonly eventoService: EventoService) {}

  @Get()
  getAll(): Promise<object> {
    return this.eventoService.getAll();
  }

  @Get('filter/:id')
  async getOne(@Param('id') id: number): Promise<object> {
    const retorno = await this.eventoService.getEvento(+id);
    return Object.keys(retorno).length === 0
      ? { Message: 'Não foi encontrado com esse ID' }
      : retorno;
  }

  @Get('new')
  async registra(@Body() body: any): Promise<object> {
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

  @Get('remove')
  async exclui(@Body() body: any): Promise<object> {
    return (await this.eventoService.excluiEvento(+body?.id))
      ? { Message: 'Excluido com sucesso' }
      : { Message: 'Falha ao excluir!' };
  }
}
