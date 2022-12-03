import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { Item } from 'types/Item';
import { ItemService } from '../services/item.service';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}
  @Get()
  getTeste(): string {
    return 'oi';
  }
  @Get('filter/:id')
  async getItem(@Param('id') id: number): Promise<Item> {
    return await this.itemService.getItem(+id);
  }

  @Post()
  async criaItem(@Body() body: any): Promise<boolean> {
    return await this.itemService.criaItem(new Item(body.nome, body.preco));
  }

  @Post()
  async removeItem(@Body() body: any): Promise<boolean> {
    return await this.itemService.removeItem(+body.id);
  }
}
