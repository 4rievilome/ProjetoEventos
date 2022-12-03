import { Controller, Get } from '@nestjs/common';
import { PalestranteService } from '../services/palestrante.service';

@Controller()
export class EventoController {
  constructor(private readonly appService: PalestranteService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
