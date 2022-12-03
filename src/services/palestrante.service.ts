import { Injectable } from '@nestjs/common';

@Injectable()
export class PalestranteService {
  getHello(): string {
    return 'Hello World!';
  }
}
