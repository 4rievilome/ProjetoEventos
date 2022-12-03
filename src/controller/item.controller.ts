import { Controller, Get } from '@nestjs/common';
import { ItemService } from '../services/item.service';

@Controller()
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  getItem(id: number): number {
    return this.itemService.getItem(id);
  }
}
