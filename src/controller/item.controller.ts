import { Item } from 'types/Item';
import { ControllerInterface } from './ControllerInterface';
import { ItemService } from '../services/item.service';
import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('itens')
export class ItemController implements ControllerInterface {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async getAll(): Promise<object> {
    return await this.itemService.getAll();
  }

  @Get('filter/:id')
  async getOne(@Param('id') id: number): Promise<object> {
    const retorno = await this.itemService.getItem(+id);
    return Object.keys(retorno).length === 0
      ? { Message: 'não foi possivel encontrar com esse id' }
      : retorno;
  }

  @Post('new')
  async registra(@Body() body: any): Promise<object> {
    return (await this.itemService.criaItem(new Item(body?.nome, +body?.preco)))
      ? { Message: 'Criado com sucesso!' }
      : { Message: 'Não foi possivel criar!' };
  }

  @Post('remove')
  async exclui(@Body() body: any): Promise<object> {
    return (await this.itemService.removeItem(+body?.id))
      ? { Message: 'Excluido com sucesso!' }
      : { Message: 'Falha ao excluir' };
  }
}
