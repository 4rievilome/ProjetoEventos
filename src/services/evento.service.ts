import { Injectable } from '@nestjs/common';

@Injectable()
export class EventoService {
  getHello(): string {
    return 'Hello World!';
  }
}
