import { Controller, Get } from '@nestjs/common';
import { EventoService } from '../services/evento.service';

@Controller()
export class EventoController {
  constructor(private readonly appService: EventoService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
