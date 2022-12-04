import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Item } from 'types/Item';
import { ItemService } from '../services/item.service';

@Controller('itens')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async getAll(): Promise<object> {
    return await this.itemService.getAll();
  }

  @Get('filter/:id')
  async getItem(@Param('id') id: number): Promise<object> {
    const retorno = await this.itemService.getItem(+id);
    return Object.keys(retorno).length === 0
      ? { Message: 'não foi possivel encontrar com esse id' }
      : retorno;
  }

  @Post('new')
  async criaItem(@Body() body: any): Promise<object> {
    return (await this.itemService.criaItem(new Item(body?.nome, +body?.preco)))
      ? { Message: 'Criado com sucesso!' }
      : { Message: 'Não foi possivel criar!' };
  }

  @Post('remove')
  async removeItem(@Body() body: any): Promise<object> {
    return (await this.itemService.removeItem(+body?.id))
      ? { Message: 'Excluido com sucesso!' }
      : { Message: 'Falha ao excluir' };
  }
}
