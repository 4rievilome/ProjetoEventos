import { Controller, Get, Post, Param, Body, Header } from '@nestjs/common';
import { Item } from 'types/Item';
import { ControllerInterface } from './ControllerInterface';
import { ItemService } from '../services/item.service';

@Controller('itens')
export class ItemController implements ControllerInterface {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  async getAll(): Promise<object> {
    return await this.itemService.getAll();
  }

  @Get('filter/:id')
  @Header('Access-Control-Allow-Origin', '*')
  async getOne(@Param('id') id: number): Promise<object> {
    const retorno = await this.itemService.getItem(+id);
    return Object.keys(retorno).length === 0
      ? { Message: 'não foi possivel encontrar com esse id' }
      : retorno;
  }

  @Post('new')
  @Header('Access-Control-Allow-Origin', '*')
  async registra(@Body() body: any): Promise<object> {
    return (await this.itemService.criaItem(new Item(body?.nome, +body?.preco)))
      ? { Message: 'Criado com sucesso!' }
      : { Message: 'Não foi possivel criar!' };
  }

  @Post('remove')
  @Header('Access-Control-Allow-Origin', '*')
  async exclui(@Body() body: any): Promise<object> {
    return (await this.itemService.removeItem(+body?.id))
      ? { Message: 'Excluido com sucesso!' }
      : { Message: 'Falha ao excluir' };
  }
}
