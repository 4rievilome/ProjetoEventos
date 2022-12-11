import { Controller, Post, Body, Header } from '@nestjs/common';
import { Sub } from 'types/Sub';
import { SubService } from 'src/services/sub.service';

@Controller('subs')
export class SubController {
  constructor(private readonly subService: SubService) {}

  @Post('new')
  @Header('Access-Control-Allow-Origin', '*')
  async registra(@Body() body: any): Promise<object> {
    console.log(body);
    return (await this.subService.registraSub(
      new Sub(body?.nome, body?.email, body?.eventoID),
    ))
      ? { Message: 'Criado com sucesso!' }
      : { Message: 'Falha ao criar! ' };
  }
}
