import { PalestranteService } from 'src/services/palestrante.service';
import { ControllerInterface } from './ControllerInterface';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Palestrante } from 'types/Palestrante';

@Controller('palestrantes')
export class PalestranteController implements ControllerInterface {
  constructor(private readonly palestranteService: PalestranteService) {}

  @Get()
  async getAll(): Promise<object> {
    return await this.palestranteService.getAll();
  }

  @Get('filter/:id')
  async getOne(@Param('id') id: number): Promise<object> {
    const retorno = await this.palestranteService.getPalestrante(id);
    return Object.keys(retorno).length === 0
      ? { Message: 'Não foi possivel encontrar com esse ID' }
      : retorno;
  }

  @Post('new')
  async registra(@Body() body: any): Promise<object> {
    return (await this.palestranteService.registraPalestrante(
      new Palestrante(
        body?.nomePalestrante,
        body?.email,
        body?.cargo,
        body?.instituicao,
      ),
    ))
      ? { Message: 'Criado com sucesso' }
      : { Message: 'Falha ao criar' };
  }

  @Post('new')
  async exclui(@Body() body: any): Promise<object> {
    return (await this.palestranteService.excluiPalestrante(+body.id))
      ? { Message: 'Excluido com sucesso' }
      : { Message: 'Falha ao excluir' };
  }
}
