import { EventoService } from '../services/evento.service';
import { Body, Controller, Get, Param, Post, Header} from '@nestjs/common';
import { Evento } from '../../types/Evento';
import { ControllerInterface } from './ControllerInterface';

@Controller('eventos')
export class EventoController implements ControllerInterface {
  constructor(private readonly eventoService: EventoService) {}

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  async getAll(): Promise<object> {
    return this.eventoService.getAll();
  }

  @Get('filter/:id')
  @Header('Access-Control-Allow-Origin', '*')
  async getOne(@Param('id') id: number): Promise<object> {
    const retorno = await this.eventoService.getEvento(+id);
    return Object.keys(retorno).length === 0
      ? { Message: 'Não foi encontrado com esse ID' }
      : retorno;
  }


  @Post('new')
  @Header('Access-Control-Allow-Origin', '*')
  async registra(@Body() body: any): Promise<object> {
    return (await this.eventoService.registraEvento(
      new Evento(
        body.nomeEvento,
        body.horario,
        +body.capacidade,
        body.tema,
        new Date(body.data),
      ),
    ))
      ? { Message: 'Criado com sucesso' }
      : { Message: 'Falha ao criar!' };
  }

  @Post('remove')
  @Header('Access-Control-Allow-Origin', '*')
  async exclui(@Body() body: any): Promise<object> {
    return (await this.eventoService.excluiEvento(+body?.id))
      ? { Message: 'Excluido com sucesso' }
      : { Message: 'Falha ao excluir!' };
  }
}
