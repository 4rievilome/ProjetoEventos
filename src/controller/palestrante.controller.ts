import { Controller, Get, Post, Body } from '@nestjs/common';
import { Palestrante } from 'types/Palestrante';
import { PalestranteService } from '../services/palestrante.service';

@Controller('palestrantes')
export class PalestranteController {
  constructor(private readonly palestranteService: PalestranteService) {}

  @Get('filter/:id')
  async getPalestrante(id: number): Promise<Palestrante> {
    return await this.palestranteService.getPalestrante(id);
  }

  @Post('new')
  async registraPalestrante(@Body() body: any): Promise<boolean> {
    return await this.palestranteService.registraPalestrante(
      new Palestrante(
        body?.nomePalestrante,
        body?.email,
        body?.cargo,
        body?.instituicao,
      ),
    );
  }

  @Post('remove')
  async excluiPalestrante(@Body() body: any): Promise<boolean> {
    return await this.excluiPalestrante(+body.id);
  }
}
