import { Controller, Get, Post } from '@nestjs/common';
import { Item } from 'types/Item';
import { ItemService } from '../services/item.service';

@Controller()
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async getItem(id: number): Promise<Item> {
    return await this.itemService.getItem(id);
  }

  @Post()
  async criaItem(novoItem: Item): Promise<boolean> {
    return await this.itemService.criaItem(novoItem);
  }

  @Post()
  async removeItem(id: number): Promise<boolean> {
    return await this.itemService.removeItem(id);
  }
}
